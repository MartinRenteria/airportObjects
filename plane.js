class Plane {
    constructor(flightNumber, passengers) {
        this.name = flightNumber
        this.passengers = passengers
    }

    addPassenger(passenger) {
        this.passengers.push(passenger)
    }
}

module.export = Plane