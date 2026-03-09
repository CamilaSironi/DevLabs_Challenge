import { Router } from "express";
import { createTodo, updateTodo } from "../controllers/todo.controller";
import { checkJwt } from "../middleware/auth.middleware";

const router = Router();

router.post("/todos", checkJwt, createTodo);
router.put("/todos/:id", checkJwt, updateTodo);

export default router;