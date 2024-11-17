import {createFactory } from 'hono/factory';
import { logger } from 'hono/logger';

const factory = createFactory();
const middleware = factory.createMiddleware(async (c, next) => {
    c.set('foo', 'bar');
    await next()
});

const HelloController = factory.createHandlers(logger(), middleware, (c) => {
    return c.json(c.var.foo)
  });

export default HelloController;
