


export class PokeApiPokemon {
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
    this.sprites = data.sprites
    this.stats = data.stats
    this.types = data.types
    this.weight = data.weight
  }
}