import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

type Params = {
  pokeId: string;
};
//   await fetch("url", {
//     body: JSON.stringify({}),
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

type SinglePokemonData = {
  spites: {
    front_shiny: string;
  };
};

type Foo = number;
type Bar = string;

type Baz = Foo | Bar;

type Optional<GenericType> = GenericType | null | undefined;

// type Result<TOk, TFail> =
//   | {
//       tag: "OK";
//       data: TOk;
//     }
//   | {
//       tag: "ERR";
//       error: TFail;
//     };

export function SinglePokemon() {
  const params = useParams<Params>();

  const {
    isLoading,
    data: pokemon,
    error,
  } = useQuery({
    queryKey: [params.pokeId],
    queryFn: async ({ signal }) => {
      const data = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + params.pokeId,
        {
          signal,
        }
      );

      return await data.json();
    },
  });

  //   useEffect(() => {
  //     const abortController = new AbortController();

  //     async function getSinglePokemon() {
  //       setLoading(true);
  //       setError(null);
  //       try {
  //         const data = await fetch(
  //           "https://pokeapi.co/api/v2/pokemon/" + params.pokeId,
  //           {
  //             signal: abortController.signal,
  //           }
  //         );

  //         const pokemon = await data.json();

  //         setPokemon(pokemon);
  //       } catch (error) {
  //         setError(error as Error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }

  //     getSinglePokemon();

  //     return () => {
  //       //   abortController.abort();
  //     };
  //   }, []);
  console.log("params:", pokemon);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <img className="h-56" src={pokemon.sprites.front_default} />;
}
