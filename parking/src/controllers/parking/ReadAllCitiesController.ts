import {createFactory } from 'hono/factory';
import { logger } from 'hono/logger';
import ReadAllCitiesView from '../../views/city/ReadAllCitiesView';
import { cities } from '../../data/staticDatabase';
import ReactDOMServer from 'react-dom/server';  // Importation de ReactDOMServer


const factory = createFactory();
const middleware = factory.createMiddleware(async (c, next) => {
    c.set('foo', 'bar');
    await next()
});

const ReadAllCitiesController = factory.createHandlers(logger(), middleware, (c) => {
    const htmlContent = ReactDOMServer.renderToStaticMarkup(ReadAllCitiesView({ cities }));
    return c.html(htmlContent);
});

export default ReadAllCitiesController;