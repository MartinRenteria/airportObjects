const Airport = require("./airport");

describe("Airport object", () => {
  const airportTest = new Airport("SeaTac");

  test("airport has a name", () => {
    expect(airportTest.name).toBe("SeaTac");
  });
});
