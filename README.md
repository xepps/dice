# TDD Challenge

## The library

The aim is to implement a library that accepts a string command representing a roll of the dice. These commands may look like:
```
1d20
8d6
```

Maths can also be done with the results of these rolls:
```
1d20+5
4d6 + 3d8
1d2*3d6
```

There are also some more complex functions to be done with the dice:
```
1d20<2
4d6k3
10d6!
```
For a complete reference to what should be possible, see the [roll20 dice reference](https://wiki.roll20.net/Dice_Reference)

## The challenge

You should work in a pair to test drive this functionality out. I want you to ping pong on this.

Ping ponging is a pseudo-competitive tdd/pairing strategy. You alternate turns first completing the other person's test, refactoring if necessary and then writing a test back for the other person. The reason I describe this as pseudo-competetive, is that you want to write as little code as possible. If you can get away with returing 4, `return 4`! Refactors should only be done when needed. You almost want to trap the other person into writing the code with your tests.

This is great for test coverage, as you drive out every edge case within the system. It's also a great pairing strategy as it keeps both people engaged.
