import { jest } from "@jest/globals";
import request from "supertest";
import mongoose from "mongoose";
import App from "../src/app.js";

// Set dummy env for tests
process.env.MONGODB_URI = "mongodb://localhost:27017/test";

// Mock mongoose connection to avoid real database connection in tests
jest.spyOn(mongoose, "connect").mockImplementation(async () => {
  return mongoose;
});

// Avoid socket.io logging during tests
jest.spyOn(console, "log").mockImplementation(() => {});

// Mock process.exit to prevent test runner from crashing
jest
  .spyOn(process, "exit")
  .mockImplementation((code?: string | number | null | undefined): never => {
    throw new Error(`Process.exit called with code ${code}`);
  });

describe("GET /api/health", () => {
  let appInstance: App;

  beforeAll(() => {
    appInstance = new App();
  });

  afterAll(async () => {
    // Close the server and any other resources if needed
    if (appInstance && appInstance.server) {
      appInstance.server.close();
    }
  });

  it("should return 200 and status ok", async () => {
    const res = await request(appInstance.app).get("/api/health");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status", "ok");
  });
});
