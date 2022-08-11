![An animated gif depicting a looping pattern in the Game of Life](https://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif)
# Project: Conway’s Game of Life
*The above gif was created by [Lucas Vieira](https://commons.wikimedia.org/wiki/User:LucasVB) and is used under [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/)*

## DIRECTORY
p5-game-of-life-project in ASCProjects/week5/day4
## FILES
`sketch.js` (Other files will not change)
## BACKGROUND
- The Game of Life is a cellular automaton created by John Horton Conway, a British mathematician. It is a zero-player game, meaning that it doesn’t take input beyond its starting state.
- A cellular automaton is a grid of cells with finite states (“on” and “off” being the simplest option) and a set of neighbors defined by their position relative to the cell. Cellular automata advance through generations based on a rule or set of rules which determine the new state of each cell.

- **The Game of Life runs on the following rules:**
  - Any active cell with exactly two or three active neighbors remains active
  - Any other active cells become inactive
  - Any inactive cell with exactly three active neighbors becomes active
## INSTRUCTIONS
- Fork and clone this repository.
- The starter code includes a modified `grid.js` from [the code along](https://github.com/ChaoticTeal/procedural-generation-code-along). Be sure to check exactly how the `Grid` and `Box` classes work so you know how to interact with them!
- Also included is the `checkNeighbors()` function, for your convenience

- In `sketch.js`, write code that does the following:
  - Randomly generates a starting layout for `myGrid`
  - Advances `myGrid` by a single generation using the three rules of the Game of Life
- Something to think about: If the grid steps forward every time draw runs, the output will be difficult to follow; how can you slow it down?
## EXTRA CREDIT
- Display the current generation number somewhere on screen
- Include an option to pause the cycle when a key is pressed
