import axios from 'axios'
import { PokemonInterface } from '../interfaces/pokemon'

export const getPokemon = async (pokemonId: number): Promise<PokemonInterface> => {
    const { data } = await axios.get<PokemonInterface>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    return data
}