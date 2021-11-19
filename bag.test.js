const Bag = require('./Bag')

describe('Bag objects', () => {

	test('Bags have weight', () => {
		const testBag = new Bag(50)
		expect(testBag.weight).toBe(50)
	})

    test("This will throw an error if bag doesn't have weight", () => {
		expect(() => new Bag()).toThrowError('bag must have a weight')
	})
})