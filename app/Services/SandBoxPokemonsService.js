import { appState } from "../AppState.js"
import { SandboxServer } from "./AxiosService.js"
import { SandboxPokemon } from "../Models/SandboxPokemon.js"


class SandboxPokemonsService {
  async getSandboxPokemon() {
    const res = await SandboxServer.get(`/api/${appState.user}/pokemon`)
    appState.sandboxPokemon = res.data.map(p => new SandboxPokemon(p))
  }
  async catchPokemon() {
    if (!appState.activePokemon) { return }

    const alreadyCaught = appState.sandboxPokemon.find(p => p.name == appState.activePokemon.name)
    if (alreadyCaught) {
      throw new Error("You've already caught this pokemon!")
    }
    const res = await SandboxServer.post(`/api/${appState.user}/pokemon`, appState.activePokemon)
    const caughtPokemon = new SandboxPokemon(res.data)
    appState.sandboxPokemon = [...appState.sandboxPokemon, caughtPokemon]
  }

  async releasePokemon(id) {
    await SandboxServer.delete(`/api/${appState.user}/pokemon/${id}`)
    appState.sandboxPokemon = appState.sandboxPokemon.filter(p => p.id !== id)
  }
}

export const sandboxPokemonsService = new SandboxPokemonsService()