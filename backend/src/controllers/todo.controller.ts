import { NextFunction, Request, Response } from "express";
import { Todo } from "../models/todo";

export const getTodos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.auth!.payload.sub!;

    const todos = await Todo.findAll({ where: { userId } });

    res.status(200).json(todos);
  } catch (error) {
        next(error);
  }
};

export const getTodoById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const userId = req.auth!.payload.sub!;

    const todo = await Todo.findOne({ where: { id, userId } });

    if (!todo) {
        throw new Error("Todo not found");
    }

    res.status(200).json(todo);
  } catch (error) {
        next(error);
  }
};

export const createTodo = async (req: Request, res: Response, next: NextFunction) => {
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
        next(error);
  }
};

export const updateTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const userId = req.auth!.payload.sub!;

    const todo = await Todo.findOne({ where: { id, userId } });

    if (!todo) {
        throw new Error("Todo not found");
    }

    await todo.update({ title, description, completed });

    res.status(200).json(todo);
  } catch (error) {
        next(error);
  }
};

export const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const userId = req.auth!.payload.sub!;

    const todo = await Todo.findOne({ where: { id, userId } });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    await todo.destroy();

    res.status(204).send();
  } catch (error) {
        next(error);
  }
};