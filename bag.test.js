const Bag = require('./Bag')

describe('Bag objects', () => {

	test('Bags have weight', () => {
		const testBag = new Bag(50)
		expect(testBag.weight).toBe(50)
	})

})