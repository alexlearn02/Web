import { Hono } from "hono";

import HomeController from "./controllers/HomeController";
const app = new Hono();
app.get("/", ...HomeController);
export default app;



