import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";


function drawPokemon() {
  let template = ''
  setHTML('active-pokemon', appState.activePokemon.Template)
}

export class ActivePokemonController {
  constructor() {
    appState.on('activePokemon', drawPokemon)
  }
}