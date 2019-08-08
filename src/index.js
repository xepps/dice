const rollDice = (command, rand) => {
  if (!command.includes('d')) return +command

  const dice = command.split('d')
  let acc = 0
  for (let i = 0; i < dice[0]; i += 1) {
    acc += Math.floor((dice[1] * rand()) + 1)
  }
  return acc
}

const diceRoller = (command, rand = Math.random) => {
  return command.split('+')
    .map(s => s.trim())
    .map(e => rollDice(e, rand))
    .reduce((acc, curr) => acc + curr, 0)
}

module.exports = diceRoller
