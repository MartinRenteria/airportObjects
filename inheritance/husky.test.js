const Husky = require("./husky")

describe('Husky Class', () => {
	const testHusky = new Husky();

	test('this doggy is a Husky!', () => {
		expect(testHusky.breed).toBe('Husky')
	})

	test('Huskey can talk too!', () => {
		expect(testHusky.speak()).toEqual("Bark!")
	})
})