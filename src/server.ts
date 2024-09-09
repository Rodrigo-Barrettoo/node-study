import dotenv from "dotenv";
import express, { Express } from "express";
import routes from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`[Server] running at 'http://localhost:${port}'`);
});
