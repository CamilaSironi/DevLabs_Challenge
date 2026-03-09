import { Router } from "express";
import { createTodo, getTodoById, getTodos, updateTodo } from "../controllers/todo.controller";
import { checkJwt } from "../middleware/auth.middleware";

const router = Router();

router.get("/todos", checkJwt, getTodos);
router.get("/todos/:id", checkJwt, getTodoById);
router.post("/todos", checkJwt, createTodo);
router.put("/todos/:id", checkJwt, updateTodo);

export default router;