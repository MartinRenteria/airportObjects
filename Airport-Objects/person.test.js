const Person = require('./Person')
const Bag = require('./Bag')

describe('Person', () => {
	const testPerson = new Person('Martin')
	const testBag = new Bag(12)

	test('has a name', () => {
		expect(testPerson.name).toBe('Martin')
	})

	test('has a bag', () => {
		testPerson.addBag(testBag)
		expect(testPerson.bags.length).toBe(1)
	})
})