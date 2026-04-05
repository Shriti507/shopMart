import request from "supertest";
import express from "express";
import { describe, it, expect } from "@jest/globals";
const app = express();
app.get("/api/health", (req, res) => res.status(200).json({ status: "ok" }));

describe("API Integration Core", () => {
  it("responds with 200 on healthcheck endpoint", async () => {
    const response = await request(app).get("/api/health");
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
  });

  it("rejects POST requests on non-existent endpoints payload", async () => {
    const response = await request(app).post("/api/unknown");
    expect(response.status).toBe(404);
  });
});
