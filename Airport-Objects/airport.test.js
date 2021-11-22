const Airport = require("./airport");

describe("Airport object", () => {
  const airportTest = new Airport("SeaTac", 'B700');

  test("airport has a name", () => {
    expect(airportTest.name).toBe("SeaTac");
  });

  test("airport has this plane", () => {
    expect(airportTest.planes).toBe("B700");
  });
});
