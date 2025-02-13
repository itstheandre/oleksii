import { useEffect, useState } from "react";
import { Link } from "react-router";
import { z } from "zod";

const url = "https://pokeapi.co/api/v2/pokemon";

// fetch
// fetch(url, {})
// Success case (calllback)
// Failure case (callback)

// fetch(url, config).then((data) => {}).catch((error) => {})
// async function functionName() {
// try {
// const data = await fetch(url, config)
// } catch(error) {
// // deal with the error here
// }
// }

type PokemonBase = {
  name: string;
  url: string;
};

function App() {
  const [pokemons, setPokemons] = useState<
    Array<{
      pic: string;
      name: string;
      url: string;
      id: string;
    }>
  >([]);

  console.log("pokemons:", pokemons);
  async function fetchPokemons() {
    const pokemonResponse = await fetch(url);

    const jsonResponse = await pokemonResponse.json();

    const pokemonSchema = z.object({
      count: z.number(),
      next: z.string().nullable(),
      previous: z.string().nullable(),
      results: z.array(
        z.object({
          name: z.string(),
          url: z.string().url(),
        })
      ),
    });

    const pokemonList = pokemonSchema.parse(jsonResponse);
    const pokemons = pokemonList.results.map((pokemon) => {
      const id = pokemon.url.split("/").filter(Boolean).at(-1);

      if (!id) {
        throw new Error("Oopsie");
      }

      return {
        ...pokemon,
        pic: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        id,
      };
    });

    setPokemons(pokemons);
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      {pokemons.map((pokemon) => {
        return (
          <Link to={`/pokemon/${pokemon.id}`}>
            <h1>{pokemon.name}</h1>

            <img src={pokemon.pic} />
          </Link>
        );
      })}
      {/* ForEach(value, value, value, ) {
      Button {

      }
    } */}
    </>
  );
}

export default App;
