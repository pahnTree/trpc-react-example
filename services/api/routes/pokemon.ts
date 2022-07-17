
import { z } from 'zod';

import { createRouter } from '../trpc/trpc';

const pokemonList = {
  name: ['pikachu', 'charmander', 'bulbasaur'],
  type: ['electric', 'fire', 'grass']
}

const pokemon = createRouter()
  .query('get-pokemon', {
    input: z.object({
      name: z.string()
    }),
    async resolve(resp) {
      const found = pokemonList.name.indexOf(resp.input.name)
      if (found >= 0) {
        return {
          name: pokemonList.name[found],
          type: pokemonList.type[found]
        }
      }
      return {
        name: resp.input.name,
        type: 'unknown'
      }
    }
  });

export default pokemon;
