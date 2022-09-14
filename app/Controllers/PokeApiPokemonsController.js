import { appState } from "../AppState.js"
import { pokeApiPokemonsService } from "../Services/PokeApiPokemonsService.js"
import { Pop } from "../Utils/Pop.js"


export class PokeApiPokemonsController {
  constructor() {
    this.getPokemon()
  }
  async getPokemon() {
    try {
      await pokeApiPokemonsService.getPokemon()
    } catch (error) {
      console.error('[GettingPokemon]', error)
      Pop.error(error)
    }
  }
}