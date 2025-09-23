// My 5th kata, and 1st in a planned series of rock climbing themed katas.

// In rock climbing (bouldering specifically), the V/Vermin (USA) climbing grades start at 'VB' (the easiest grade), and then go 'V0', 'V0+', 'V1', 'V2', 'V3', 'V4', 'V5' etc. up to 'V17' (the hardest grade).

// You will be given a list of climbing grades and you have to write a function to return a list of the grades sorted easiest to hardest.

// If the input is an empty list, return an empty list; otherwise the input will always be a valid list of one or more grades.

// Please do vote, rank, and provide any feedback on the kata.
const assert = require('assert')

function sortGrades(arr){
   const grades = {
        'VB': 0, 'V0': 1, 'V0+': 2, 'V1': 3, 'V2': 4, 'V3': 5, 'V4': 6, 'V5': 7, 'V6': 8, 'V7': 9, 'V8': 10, 'V9': 11, 'V10': 12, 'V11': 13, 'V12': 14, 'V13': 15, 'V14': 16, 'V15': 17, 'V16': 18, 'V17': 19
    }

    return arr.sort((a, b) => (grades[a]) - (grades[b]));
  // let results = []
  // const sortStr = arr
  // .map(item => item.slice(1))
  // .sort((a,b) => b - a)
  // .forEach(element => {
  //  results.push(('V' + element))
  // });
 
  // return results
}
console.log(sortGrades(["V0+", "V0", "V16", "V2", "VB", "V6"]))
// Input is a array of strings.
// Output is an array of sorted strings.
    assert.strictEqual(["V7", "V12", "V1"], ["V1", "V7", "V12"]);
    assert.strictEqual(["V13", "V14", "VB", "V0"], ["VB", "V0", "V13", "V14"]);
    assert.strictEqual(["V0+", "V0", "V16", "V2", "VB", "V6"], ["VB", "V0", "V0+", "V2", "V6", "V16"]);
    assert.strictEqual(["VB", "VB"], ["VB", "VB"]);
    assert.strictEqual(["V7"], ["V7"]);
// Make a variable that contains key string. Then slice index zero and sort. Then concat "V". Next time use a key or dictionary.