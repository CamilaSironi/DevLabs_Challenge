import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

interface TodoAttributes {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  userId: string;
}

interface TodoCreationAttributes extends Optional<TodoAttributes, "id" | "completed" | "userId"> {}

export class Todo extends Model<TodoAttributes, TodoCreationAttributes> implements TodoAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public completed!: boolean;
  public userId!: string;

    public readonly createdAt!: Date;   
    public readonly updatedAt!: Date;
}

Todo.init(
  {
    id: {       
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,    
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    },
    {
        sequelize,
        modelName: "Todo",
        tableName: "todos",
        timestamps: true,
    }
);