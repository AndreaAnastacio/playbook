class Pokemon {
  constructor(pokemon) {
    this.pokemon_name = pokemon;
  }

  sayHello() {
    console.log(`Mi pokemon ${this.pokemon_name} te saluda!`);
  }
}

export default Pokemon;
