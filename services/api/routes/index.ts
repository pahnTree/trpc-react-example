import { createRouter } from "../trpc/trpc";

import greeting from "./greeting";
import pokemon from "./pokemon";

const appRouter = createRouter()
  .merge('core.', greeting)
  .merge('pokemon.', pokemon);

export default appRouter;
