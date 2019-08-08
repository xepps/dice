const diceRoller = require('../src')
const sinon = require('sinon')

describe('The dice roller', () => {
  describe('Simple Rolls', () => {
    it('should complete simple rolls', () => {
      const fakeRandom = () => 0.5
      expect(diceRoller('1d6', fakeRandom)).toEqual(4)

      expect(diceRoller('2d6', fakeRandom)).toEqual(8)

      expect(diceRoller('2d4', fakeRandom)).toEqual(6)

      expect(diceRoller('3d12', fakeRandom)).toEqual(21)
    })

    it('should work with addtion', () => {
      const fakeRandom = () => 0.5
      expect(diceRoller('1d6 + 2', fakeRandom)).toEqual(4 + 2)
    })

    it('should keep or drop the highest value die/s rolled', () => {
      const fakeRandom = () => sinon.stub()
        .onFirstCall(0.5)
        .onSecondCall(0.75)
        .onThirdCall(0.25)
      expect(diceRoller('3d20k2', fakeRandom)).toEqual(27)
    })
  })
})
