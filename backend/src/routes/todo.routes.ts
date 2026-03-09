import { Router } from "express";
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from "../controllers/todo.controller";
import { checkJwt } from "../middleware/auth.middleware";

const router = Router();

router.get("/todos", checkJwt, getTodos);
router.get("/todos/:id", checkJwt, getTodoById);
router.post("/todos", checkJwt, createTodo);
router.put("/todos/:id", checkJwt, updateTodo);
router.delete("/todos/:id", checkJwt, deleteTodo);

export default router;