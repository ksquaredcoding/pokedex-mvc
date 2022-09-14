// import { ValuesController } from "./Controllers/ValuesController.js";

import { ActivePokemonController } from "./Controllers/activePokemonController.js";
import { PokeApiPokemonsController } from "./Controllers/PokeApiPokemonsController.js";
import { SandboxPokemonsController } from "./Controllers/SandboxPokemonsController.js";

class App {
  // valuesController = new ValuesController();
  pokeApiPokemonsController = new PokeApiPokemonsController();
  activePokemonController = new ActivePokemonController();
  sandboxPokemonsController = new SandboxPokemonsController();
}

window["app"] = new App();
