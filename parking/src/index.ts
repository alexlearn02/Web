import { Hono } from "hono";
import HomeController from "./controllers/HomeController";
import { serveStatic } from 'hono/bun';

const app = new Hono();

app.use('/static/*', serveStatic({ root: './' }));
app.get("/", ...HomeController);
export default app;



