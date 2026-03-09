import { Router } from "express";
import { createTodo } from "../controllers/todo.controller";
import { checkJwt } from "../middleware/auth.middleware";

const router = Router();

router.post("/todos", checkJwt, createTodo);

export default router;