import dotenv from "dotenv";
dotenv.config();

import request from "supertest";
import app from "../app";
import { sequelize } from "../config/database";

jest.mock("../middleware/auth.middleware", () => ({
  checkJwt: (req: any, res: any, next: any) => {
    req.auth = { payload: { sub: "test-user" } };
    next();
  }
}));

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.close();
});

describe("POST /api/todos", () => {

  it("should create a new todo", async () => {

    const response = await request(app)
      .post("/api/todos")
      .send({
        title: "Test todo",
        description: "Testing creation",
        completed: false
      });

    console.log(response.body);

    expect(response.status).toBe(201);

    expect(response.body).toHaveProperty("id");
    expect(response.body.title).toBe("Test todo");
    expect(response.body.description).toBe("Testing creation");
  });

  it("should fail if title is missing", async () => {

  const response = await request(app)
    .post("/api/todos")
    .send({
      description: "Task without title",
      completed: false
    });

  console.log(response.body);

  expect(response.status).toBe(400);

  expect(response.body).toHaveProperty("errors");

});

});