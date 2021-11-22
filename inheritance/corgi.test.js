const Corgi = require("./corgi")

describe('Corgi Class', () => {
	const testCorgi = new Corgi();

	test('this doggy is a Corgi!', () => {
		expect(testCorgi.breed).toBe('Corgi')
	})

	test('Corgi can talk too!', () => {
		expect(testCorgi.speak()).toEqual("Bark!")
	})
})
