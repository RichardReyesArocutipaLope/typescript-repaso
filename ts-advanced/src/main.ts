import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('charmander');

(Pokemon.prototype as any).customName = 'Pikachu';

console.log(charmander)
charmander.savePokemonToDB(50)

charmander.publicApi = 'naylink'
console.log(charmander)