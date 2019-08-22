const diceRoller = require('../src')

describe('The dice roller', () => {
  it('should roll the dice!', () => {
    expect(diceRoller('1d6') <= 6).toBeTruthy()
  })

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

    it('should add on a simple number', () => {
      const fakeRandom = () => 0.5
      expect(diceRoller('1d20+15', fakeRandom)).toEqual(26)
    })

    it('should multiply simple numbers', () => {
      const fakeRandom = () => 0
      expect(diceRoller('2*1d2', fakeRandom)).toEqual(2)
    })
  })

  describe('add 2 dice together', () => {
    it('should add 2 rolls of dice together', () => {
      const fakerandom = () => 0
      expect(diceRoller('1d5 + 1d9', fakerandom)).toEqual(2)
    })
    it('should add 2 rolls of dice together', () => {
      const fakerandom = () => 0.99
      expect(diceRoller('10000d10 + 1000000d100', fakerandom)).toEqual(100100000)
    })
    it('should handle multiple operations', () => {
      const fakeRandom = () => 0
      expect(diceRoller('2*1d2+2*1d2', fakeRandom)).toEqual(4)
    })
  })
})
