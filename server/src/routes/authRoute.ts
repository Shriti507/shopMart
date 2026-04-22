import { Router } from "express";
import AuthController from "../controllers/authController.js";

export default class AuthRoute {
  // path? : string="/registerUser";
  // router:Router=Router();
  public path: string;
  public router = Router();
  private authController = new AuthController();

  constructor() {
    this.path = "/api/auth";
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/register", this.authController.registerUser);
    this.router.post("/register-society", this.authController.registerSociety);
    this.router.post("/login", this.authController.loginUser);
    this.router.post("/login-society", this.authController.loginSociety);
  }
}

export const authRouteInstance = new AuthRoute();
