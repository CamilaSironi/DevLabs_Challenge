import app from "./app";

import "./models/todo";

import dotenv from "dotenv";

dotenv.config();

import { sequelize } from "./config/database";

import { errorHandler } from "./middleware/error.middleware";

const port = process.env.PORT || 3000;

app.use(errorHandler);

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Database connected");

    await sequelize.sync({ alter: true });
    console.log("Models synchronized");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  } catch (error) {
    console.error("Unable to connect to DB:", error);
  }
}

startServer();