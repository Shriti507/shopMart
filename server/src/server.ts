import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const cwdIsServerPackage = path.basename(process.cwd()) === "server";
const envPathFromCwd = cwdIsServerPackage
  ? path.join(process.cwd(), ".env")
  : path.join(process.cwd(), "server", ".env");

const envPathFromEntry = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  ".env",
);

const envPath = fs.existsSync(envPathFromCwd)
  ? envPathFromCwd
  : fs.existsSync(envPathFromEntry)
    ? envPathFromEntry
    : envPathFromCwd;

console.log("ENV PATH:", envPath);
dotenv.config({ path: envPath });
console.log("JWT_SECRET:", process.env.JWT_SECRET);

if (!process.env.JWT_SECRET?.trim()) {
  console.warn(
    "[env] JWT_SECRET still undefined after dotenv; using dev fallback (set JWT_SECRET in server/.env for production).",
  );
  process.env.JWT_SECRET = "test123";
  console.log("JWT_SECRET (fallback):", process.env.JWT_SECRET);
}

import App from "./app.js";

const app = new App();

app.startServer();
