function hashPractice(arr) {
    let objCount = {}
    for (const currentItem of arr) {
        if (objCount[currentItem]) {
            objCount[currentItem] ++
        } else {
            objCount[currentItem] = 1
        }
    }
    return objCount
}
console.log(hashPractice([2,5,4,4,4,4]))

//? codewars fast practice

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function gamesWon(arr) {
    const parseNumsOfScore = arr.map(item => item.split(':'))
    let sum = 0
    for (let i; i < arr.lenght; i++) {
        if (parseInt(parseNumsOfScore[0]) > parseInt(parseNumsOfScore[1])) {
            sum += 3
        }else if(parseInt(parseNumsOfScore[0]) === parseInt(parseNumsOfScore[1])){
            sum += 1
        }
    }
    return sum
}
console.log(gamesWon(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']))
//input is going to be an arr of strings of numbers with the format of '0:1'
//output is going to be a sum if the point system
//points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']), 30)
//change strings to nums or parse string; create a var that will hold the sum to our counter; loop through and compare nums 