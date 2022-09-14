import { PokedexEntry } from "./PokedexEntry.js";



export class SandboxPokemon {
  constructor(data) {
    this.name = data.name
    this.id = data.id
  }

  get ListTemplate() {
    return /*html*/ `
    <div class="no-select p-3">
  <div class="d-flex justify-content-between text-light">
    <p>${this.name}</p>
  </div>
</div>
    `
  }
}