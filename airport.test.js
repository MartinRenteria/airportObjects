const Airport = require('./Airport')

describe('Airport object', () => {
	const airportTest = new Airport("AA")

	test('airport has a name', () => {
		expect(airportTest.name).toBe("AA")
	})
})
