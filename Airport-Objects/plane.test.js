const Plane = require("./plane");

// Testing if plane is added
describe("Plane", () => {
  test("has a flight number", () => {
    const testPlane = new Plane("B500");
    expect(testPlane.flightNumber).toBe("B500");
  });
});
// Testing if adding passengers method adds passengers into array
describe("Passengers", () => {
  test("has passengers", () => {
    const testPlane = new Plane("B500");
    const crystal = new Plane("Crystal");
    const judith = new Plane("Judith");
    testPlane.addPassenger(crystal);
    testPlane.addPassenger(judith);
    expect(testPlane.passengers.length).toBe(2);
  });
});
