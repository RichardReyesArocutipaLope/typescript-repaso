import { getPokemon } from "./generics/get-pokemons";

getPokemon(4)
  .then(pokemon => console.log(pokemon.name))
  .catch(error => console.log(error))
  .finally(() => console.log('Fin de get pokemon'))