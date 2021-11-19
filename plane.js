class Plane {
    constructor(flightNumber) {
        this.flightNumber = flightNumber
        this.passengers = []
    }

    addPassenger(passenger) {
        this.passengers.push(passenger)
    }
}

module.exports = Plane