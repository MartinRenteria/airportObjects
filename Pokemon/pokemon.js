class Pokemon {
  static pokemons = [];

  constructor(name, number, type, hp) {
    this.name = name;
    this.number = number;
    this.type = type;
    this.hp = hp;
  }

  static nameIsString(name) {
    return typeof name === 'string'
  }

  static numberIsTypeNumber(pokemonNumber) {
    return typeof pokemonNumber.number === 'number'

  }

  static isValidType(type) {
    const elements = ['fire','water','electric', 'ice'];
    return elements.includes(type)
  }

  static isValidHp(hp) {
    return number > 0 && number <= 999
  }

  static isValidPokemon(pokemon) {
    return Pokemon.isValidPokemon(pokemon.name) && Pokemon.isValidPokemon(pokemon.pokemonNumber) && Pokemon.isValidPokemon(pokemon.isValidType) && Pokemon.isValidPokemon(pokemon.isValidHp)
  }
  assignType() {}
}

let pikachu = new Pokemon('pika', 3, 'Animal', 25)
console.log(pikachu)
console.log(Pokemon.nameIsString('pokemon'))
console.log(Pokemon.isValidType('water'))