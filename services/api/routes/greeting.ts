
import { z } from 'zod';

import { createRouter } from '../trpc/trpc';

const greeting = createRouter()
  .query('greeting', {
    input: z.object({
      text: z.string().nullish()
    }),
    async resolve(resp) {
      return {
        greeting: resp.input.text ? `hello ${resp.input.text}` : ''
      }
    }
  });

export default greeting;
