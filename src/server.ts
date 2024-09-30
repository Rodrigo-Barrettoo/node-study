import express, { Express } from "express";
import { env } from "./env";
import routes from "./routes";

const app: Express = express();
const port = env.PORT;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`[Server] running at 'http://localhost:${port}'`);
});
