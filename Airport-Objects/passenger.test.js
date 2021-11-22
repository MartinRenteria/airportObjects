const Passenger = require("./passenger");
const Bag = require("./bag");

describe("Passenger", () => {
  test("has a name", () => {
    const testPerson = new Passenger("Martin");
    expect(testPerson.name).toBe("Martin");
  });
});
describe("Bags", () => {
  test("has a bag", () => {
    const testBag = new Passenger(1);
    testBag.addBag(1);
    expect(testBag.bags.length).toBe(1);
  });
});

describe("Passenger Class", () => {
  test("if they have a passport", () => {
    const testPassport = new Passenger('martin', 4, '434');
    expect(testPassport.passportNumber).toBe('434');
  });
});
