const rollDice = (command, rand) => {
  const dice = `${command}`.trim().split('d')
  let acc = 0
  for (let i = 0; i < dice[0]; i += 1) {
    acc += Math.floor((dice[1] * rand()) + 1)
  }
  return acc
}

const diceRoller = (command, rand = Math.random) => {
  while (command.includes('d')) {
    const roll = /(\d+d\d+)/.exec(command)
    command = command.replace(roll[0], rollDice(roll[0], rand))
  }

  // eslint-disable-next-line
  return eval(command)
}

module.exports = diceRoller
