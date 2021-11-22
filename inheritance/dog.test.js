const Dog = require("./dog")

describe('Dog Class', () => {

	const testDog = new Dog('Shepperd','blue', 'golden')

	test('has a name', () => {
		expect(testDog.name).toBe('Shepperd')
	})

	test('has a breed', () => {
		expect(testDog.breed).toBe('golden')
	})

	test('can speak', () => {
		expect(testDog.speak()).toEqual("Bark!")
	})
})