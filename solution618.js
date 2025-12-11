// Description:
// Rules of the "Rock, Paper, Scissors" game are:

// Rock beats Scissors,
// Scissors beat Paper,
// Paper beats Rock,
// Two identical moves are a draw.
// Let's play! You will be given valid moves of two Rock, Paper, Scissors players, and have to return which player won: "Player 1 won!" for player 1, and "Player 2 won!" for player 2. In case of a draw return Draw!.

// Examples:
// "scissors",     "paper"     --> "Player 1 won!"
// "scissors",     "rock"      --> "Player 2 won!"
// "paper",        "paper"     --> "Draw!"\
const assert = require('assert')

const rps = (p1, p2) => {
    if (p1 === 'rock' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock') {
        return "Player 1 won!"
    } else if (p1 === 'scissors' && p2 === 'rock' || p1 === 'paper' && p2 === 'scissors' || p1 === 'rock' && p2 === 'paper') {
        return "Player 2 won!"
    }

    return "Draw!"
};
console.log(rps('rock', 'scissors'))
// Input has two params both strings.
// Output is one of three strings dependent on the outcome.
    assert.assertStrictEquals(rps('rock', 'scissors'), getMsg(1));
    assert.assertStrictEquals(rps('scissors', 'paper'), getMsg(1));
    assert.assertStrictEquals(rps('paper', 'rock'), getMsg(1));
    assert.assertStrictEquals(rps('scissors', 'rock'), getMsg(2));
    assert.assertStrictEquals(rps('paper', 'scissors'), getMsg(2));
    assert.assertStrictEquals(rps('rock', 'paper'), getMsg(2));
    assert.assertStrictEquals(rps('rock', 'rock'), 'Draw!');
    assert.assertStrictEquals(rps('scissors', 'scissors'), 'Draw!');
    assert.assertStrictEquals(rps('paper', 'paper'), 'Draw!');
// Conditionals that use index 
