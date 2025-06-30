import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger";

import { bookRouter } from "./routes";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/books", bookRouter);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
