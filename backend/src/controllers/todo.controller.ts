import { Request, Response } from "express";
import { Todo } from "../models/todo";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const userId = req.auth!.payload.sub!;

    const todos = await Todo.findAll({ where: { userId } });

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getTodoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.auth!.payload.sub!;

    const todo = await Todo.findOne({ where: { id, userId } });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {

    const { title, description, completed } = req.body;
    const userId = req.auth!.payload.sub!;

    const todo = await Todo.create({
      title,
      description,
      completed,
      userId
    });

    res.status(201).json(todo);

  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const userId = req.auth!.payload.sub!;

    const todo = await Todo.findOne({ where: { id, userId } });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    await todo.update({ title, description, completed });

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json(error);
  }
};