class Pokemon {
  constructor(pokemon) {
    this.pokemon_name = pokemon;
  }

  sayHello() {
    console.log(`Mi pokemon ${this.pokemon_name} te saluda!`);
  }

  sayMessage(salute) {
    console.log(`Mi pokemon ${this.pokemon_name} dice: ${salute}`);
  }
}

export default Pokemon;
