const diceRoller = require('../src')

describe('The dice roller', () => {
  describe('Simple Rolls', () => {
    it('should complete simple rolls', () => {
      const fakeRandom = () => 0.5
      expect(diceRoller('1d6', fakeRandom)).toEqual(4)
    })
  })
})
