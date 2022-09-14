import { appState } from "../AppState.js"



export class PokedexEntry {
  constructor(data) {
    this.abilities = data.abilities
    this.base_experience = data.base_experience
    this.game_indices = data.game_indices
    this.height = data.height
    this.held_items = data.held_items
    this.id = data.id
    this.is_default = data.is_default
    this.moves = data.moves
    this.name = data.name
    this.order = data.order
    this.past_types = data.past_types
    this.species = data.species
    this.img = data.img || data.sprites.front_default
    this.stats = data.stats
    this.types = data.types[0].type.name
    this.weight = data.weight
    this.nickName = data.nickName
    this.user = appState.user
  }

  get Template() {
    return /*html*/`
    <div class="card">
      <h3 class="p-2 text-center">${this.name}</h3>
      <div class="card-body text-center">
        <img src="${this.img}" alt="${this.name}">
        <div>
          <p>Height: ${this.height}</p>
          <p>Weight: ${this.weight}</p>
          <p>Types: ${this.types}</p>
        </div>
      </div>
      <div class="card-footer text-center">
        <button class="btn btn-danger" onclick="app.sandboxPokemonsController.catchPokemon()">Catch</button>
      </div>
    </div>
    `
  }
}