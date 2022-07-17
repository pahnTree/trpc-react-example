import { useState } from "react";
import React = require("react");
import { trpc } from "../utils/trpc";

type Pokemon = 'pikachu' | 'charmander' | 'bulbasaur'
const pokemonList: Pokemon[] = ['pikachu', 'charmander', 'bulbasaur'];

const Pokemon = () => {
  const [choice, setChoice] = useState<Pokemon>('pikachu')
  const pokemon = trpc.useQuery(['pokemon.get-pokemon', { name: choice }])

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChoice(e.target.value as Pokemon)
  }

  return (
    <div>
      <div>
        <select
          onChange={handleSelect}
        >
          <>
            <option disabled>Pick a pokemon</option>
            {pokemonList.map((item) => <option key={item} value={item}>{item}</option>)}
          </>
        </select>
      </div>
      <span>{pokemon.data?.name} is an {pokemon.data?.type} type of pokemon</span>
    </div>
  )
}

export default Pokemon;
