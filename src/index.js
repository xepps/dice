const performRolls = (rand, dieCount, dieSize) => {
  return Array(Number(dieCount)).fill(0).map(_ => Math.floor(rand() * Number(dieSize) + 1))
}

const diceRoller = (command, rand = Math.random) => {
  const reduced = command.replace(/\d+[d]\d+(k\d+)?/g, (match) => {
    const [dieCount, dieSize, keep] = match.split(/[dk]/g)
    console.log(dieCount, dieSize, keep)
    const rolls = performRolls(rand, dieCount, dieSize)
    console.log(rolls)
    return rolls.reduce((a, b) => a + b)
  })
  console.log(reduced)

  // let [die, value] = command.split('+')
  // die = die.trim()
  // value = value ? value.trim() : 0
  // const [count, dieSize] = die.split(/\d+d/)

  // return count * Math.floor(rand() * dieSize + 1) + +value
  return +reduced.split('+').reduce((a, b) => Number(a) + Number(b))
}

module.exports = diceRoller
