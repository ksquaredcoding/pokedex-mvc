import { appState } from "../AppState.js"
import { sandboxPokemonsService } from "../Services/SandBoxPokemonsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"




function drawSandboxPokemon() {
  let template = ''
  appState.sandboxPokemon.forEach(p => template += p.ListTemplate)
  setHTML('caught-pokemon', template)
}

export class SandboxPokemonsController {
  constructor() {
    this.getSandboxPokemon()
    appState.on('sandboxPokemon', drawSandboxPokemon)
  }
  async getSandboxPokemon() {
    try {
      await sandboxPokemonsService.getSandboxPokemon()
    } catch (error) {
      console.error('[Getting Sandbox Pokemon', error)
      Pop.error(error)
    }
  }
  async releasePokemon(id) {
    try {
      const yes = await Pop.confirm("Release this pokemon? It won't be able to come back to you.")
      if (!yes) { return }
      await sandboxPokemonsService.releasePokemon(id)
    } catch (error) {
      console.error('[Releasing Pokemon]', error)
      Pop.error(error)
    }
  }
  async catchPokemon() {
    try {
      await sandboxPokemonsService.catchPokemon()
    } catch (error) {
      console.error('[Catching Pokemon]', error)
      Pop.error(error)
    }
  }
}