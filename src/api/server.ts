import * as trpc from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import * as express from 'express';
import * as cors from 'cors';
import { z } from 'zod';
import { createRouter } from './trpc/trpc';

const greeting = createRouter()
  .query('greeting', {
    input: z.object({
      text: z.string().nullish()
    }),
    async resolve(resp) {
      return {
        greeting: `hello ${resp.input.text ?? 'world'}`
      }
    }
  });

const appRouter = createRouter()
  .merge('core.', greeting);

export type AppRouter = typeof appRouter;

const app = express();
app.use(cors());

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}) // No context

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(4000);
