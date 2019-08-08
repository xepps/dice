
const sum = (numbers) => numbers.reduce((a, b) => a + b)

const performRolls = (rand, dieCount, dieSize) => {
  const performRoll = () => Math.floor(rand() * Number(dieSize) + 1)
  return Array.from({ length: dieCount }, performRoll)
}

const parseRollExpression = (rand, expr) => {
  const [dieCount, dieSize, keep] = expr.split(/[dk]/g)
  const rolls = performRolls(rand, dieCount, dieSize)

  if (keep !== undefined) {
    rolls.sort((a, b) => b - a)
    while (rolls.length > keep) rolls.pop()
  }

  return sum(rolls)
}

const diceRoller = (command, rand = Math.random) => {
  const parser = (expr) => parseRollExpression(rand, expr)
  const reducedCommand = command.replace(/\d+[d]\d+(k\d+)?/g, parser)
  return reducedCommand.split('+').map(Number).reduce((a, b) => a + b)
}

module.exports = diceRoller
