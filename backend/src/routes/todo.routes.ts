import { Router } from "express";
import { createTodo } from "../controllers/todo.controller";

const router = Router();

router.post("/todos", createTodo);

export default router;