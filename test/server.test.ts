import express from "express";
import request from "supertest";
import { reportRouter } from "../src/api/report/reportRouter";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/reports", reportRouter);

describe("Server", () => {
  it("should return a success status code when accessing /reports/games", async () => {
    const response = await request(app).get("/reports/games");
    expect(response.status).toBe(200);
  });

  it("should return a JSON response when accessing /reports/deaths", async () => {
    const response = await request(app).get("/reports/deaths");
    expect(response.type).toBe("application/json");
  });
});
