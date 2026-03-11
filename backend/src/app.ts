import express from "express";
import todoRoutes from "./routes/todo.routes";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger";

const app = express();

app.use(express.json());

app.use("/api", todoRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;