const CrewMember = require("./crewMember");

describe("CrewMember", () => {
  test("has a name", () => {
    const testPerson = new CrewMember("Martin");
    expect(testPerson.name).toBe("Martin");
  });
});

describe("Position", () => {
  test("has a position", () => {
    const testTitle = new CrewMember("martin", "captain");
    expect(testTitle.position).toBe("captain");
  });
});
