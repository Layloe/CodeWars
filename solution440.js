// I have the par value for each hole on a golf course and my stroke score on each hole. I have them stored as strings, because I wrote them down on a sheet of paper. Right now, I'm using those strings to calculate my golf score by hand: take the difference between my actual score and the par of the hole, and add up the results for all 18 holes.

// For example:

// If I took 7 shots on a hole where the par was 5, my score would be: 7 - 5 = 2
// If I got a hole-in-one where the par was 4, my score would be: 1 - 4 = -3.
// Doing all this math by hand is really hard! Can you help make my life easier?

// Task Overview
// Complete the function which accepts two strings and calculates the golf score of a game. Both strings will be of length 18, and each character in the string will be a number between 1 and 9 inclusive.
const assert = require('assert')
function golfScoreCalculator(parList, scoreList){
    let score = 0
    // const parListSplit = parList.split('').map((item, index) => {
    //     const scoreListSplit = scoreList.split('').map((items, index) => items)
    //     score.push(item - items)
    // })
    for (let i = 0; i < parList.length; i++) {
        score += scoreList[i] - parList[i]
    }
    return score
}
console.log(golfScoreCalculator('443454444344544443', '353445334534445344'))
// input will have two params both containing string of numbers that has the length of 18.
// outout will be a positive or negative number/sum
    assert.strictEqual(golfScoreCalculator('443454444344544443', '353445334534445344'), -1);
    assert.strictEqual(golfScoreCalculator('123456123456123456', '123456123456123456'), 0);
// first will split and map each param then use a for of loop to subtract one number from the other. The solution was more simple and elegant 