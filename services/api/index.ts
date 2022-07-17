import * as trpcExpress from '@trpc/server/adapters/express';

import appRouter from './routes'

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

export type AppRouter = typeof appRouter;

const createContext = ({}: trpcExpress.CreateExpressContextOptions) => ({}) // No context

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(4000);
