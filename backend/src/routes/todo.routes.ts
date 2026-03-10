import { Router } from "express";
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from "../controllers/todo.controller";
import { checkJwt } from "../middleware/auth.middleware";
import { validate } from "../middleware/validate.middleware";
import { createTodoSchema, updateTodoSchema } from "../schemas/todo.schema";

const router = Router();

router.get("/todos", checkJwt, getTodos);
router.get("/todos/:id", checkJwt, getTodoById);
router.post("/todos", checkJwt, validate(createTodoSchema), createTodo);
router.put("/todos/:id", checkJwt, validate(updateTodoSchema), updateTodo);
router.delete("/todos/:id", checkJwt, deleteTodo);

export default router;