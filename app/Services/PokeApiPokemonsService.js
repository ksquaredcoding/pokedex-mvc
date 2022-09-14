import { appState } from "../AppState.js"
import { PokedexEntry } from "../Models/PokedexEntry.js"
import { PokeApiServer } from "./AxiosService.js"


class PokeApiPokemonsService {
  async getPokemon() {
    let randomPoke = Math.ceil(Math.random() * 905)
    const res = await PokeApiServer.get(`/api/v2/pokemon/${randomPoke}`)
    appState.activePokemon = new PokedexEntry(res.data)
  }

}
export const pokeApiPokemonsService = new PokeApiPokemonsService()