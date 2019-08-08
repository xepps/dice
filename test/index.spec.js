const diceRoller = require('../src')

describe('The dice roller', () => {
  describe('Simple Rolls', () => {
    it('should complete simple rolls', () => {
      const fakeRandom = () => 0.5
      expect(diceRoller('1d6', fakeRandom)).toEqual(4)
    })
    it('should complete more simple rolls', () => {
      const fakeRandom = () => 0.25
      expect(diceRoller('1d6', fakeRandom)).toEqual(2)
    })
    it('should complete even more simple rolls', () => {
      const fakeRandom = () => 0.75
      expect(diceRoller('1d6', fakeRandom)).toEqual(5)
    })
  })

  describe('Rolling more than one dice', () => {
    it('should roll 2 dice', () => {
      const fakeRandom = () => 0.5
      expect(diceRoller('2d6', fakeRandom)).toEqual(8)
    })

    it('should roll 2 different dice', () => {
      let randCalls = 0
      const fakeRandom = () => {
        if (randCalls === 0) {
          randCalls += 1
          return 0.5
        }
        return 0.25
      }

      expect(diceRoller('2d6', fakeRandom)).toEqual(6)
    })
  })

  describe('simple mathematices', () => {
    it('should add on a simple number', () => {
      const fakeRandom = () => 0.5
      expect(diceRoller('1d20+5', fakeRandom)).toEqual(16)
    })
  })
})
