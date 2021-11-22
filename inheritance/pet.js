class Pet {
  constructor(name, color, species) {
    this.name = name;
    this.color = color;
    this.spieces = species;
  }

  static addToArray(pet) {
    Pet.pets.push(pet);
  }

  changeName(name) {
    this.name = name;
  }
}

module.exports = Pet;
