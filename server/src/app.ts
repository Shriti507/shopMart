import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { authRouteInstance } from "./routes/authRoute.js";

interface App_interface {
  startServer(): void;
  connectDatabase(): void;
  initializeRoutes(): void;
  initializeSocket(): void;
}

export default class App implements App_interface {
  public PORT: number;
  public app: express.Application;
  public server: http.Server;
  public io: Server;

  constructor() {
    this.PORT = Number(process.env.PORT) || 3000;
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = new Server(this.server, {
      cors: {
        origin: "*", // Adjust this for production security
        methods: ["GET", "POST"]
      }
    });

    this.initializeMiddleware();
    this.connectDatabase();
    this.initializeRoutes();
    this.initializeSocket();
  }

  private initializeMiddleware(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  public get(
    path: string,
    handler: (req: express.Request, res: express.Response) => void
  ): void {
    this.app.get(path, handler);
  }

  public startServer(): void {
    this.server.listen(this.PORT, () => {
      console.log(`Server started on port ${this.PORT}`);
    });
  }

  public async connectDatabase(): Promise<void> {
    try {
      const uri: string =
        process.env.MONGODB_URI ||
        (() => {
          throw new Error("MONGODB_URI is not defined");
        })();
      await mongoose.connect(uri);
      console.log("Server connected to the database.");
    } catch (err) {
      console.error("Database connection error:", err);
      process.exit(1);
    }
  }

  public initializeRoutes(): void {
    this.app.use("/", authRouteInstance.router);
    this.app.get("/api/health", (req: express.Request, res: express.Response) => {
      res.status(200).json({ status: "ok" });
    });
    console.log("Routes initialized.");
  }

  public initializeSocket(): void {
    this.io.on("connection", (socket) => {
      console.log(`Socket connected: ${socket.id}`);
      
      socket.on("disconnect", () => {
        console.log(`Socket disconnected: ${socket.id}`);
      });
    });
    console.log("Socket.io initialized.");
  }
}
