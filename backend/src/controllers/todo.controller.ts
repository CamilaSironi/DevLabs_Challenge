import { Request, Response } from "express";
import { Todo } from "../models/todo";

export const createTodo = async (req: Request, res: Response) => {
  try {

    const { title, description, completed } = req.body;

    const todo = await Todo.create({
      title,
      description,
      completed,
      userId: "demo-user"
    });

    res.status(201).json(todo);

  } catch (error) {
    res.status(500).json(error);
  }
};