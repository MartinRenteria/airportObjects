class Passenger extends Person{
  constructor(name, bags, passportNumber, seatNumber) {
    super(name, bags)
    this.passportNumber = passportNumber;
    this.seatNumber = seatNumber;
  }
}

module.exports = Passenger;
