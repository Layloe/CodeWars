// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
function explode(x){
    let score = 0

        if (typeof x[0] != 'number' && typeof x[1] != 'number') {
            return 'Void!'
        }
        if (typeof x[0] == 'number' && typeof x[1] == 'number') {
             score += x[0] + x[1]
        }
        if (typeof x[0] != 'number' && typeof x[1] == 'number') {
             score += x[1]
        }
        if (typeof x[0] == 'number' && typeof x[1] != 'number') {
             score += x[0]
        } 
    return x.map(item => item.repeat(x, score))
}    
console.log(explode([9, 'a']))

// input is a two value array that will contain numbers or strings
// output will be a nested arrays that will be repeated depending on the outcome
    // assert.deepEqual(explode([9, 3]), [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]);
    // assert.deepEqual(explode(['a', 3]), [['a', 3], ['a', 3], ['a', 3]] ); 
    // assert.deepEqual(explode([6, 'c']), [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]); 
    // assert.deepEqual(explode(['a', 'b']), 'Void!');  
    // assert.deepEqual(explode(["a", 0]), []); 
// use conditionals and typeof to determine score then declare a variable that will contain score finally repeat score times

// if (typeof x[0] != 'number' && typeof x[1] != 'number') {
//     return 'Void!'
// }
// if (typeof x[0] == 'number' && typeof x[1] == 'number') {
//     return score.push(x[0] + x[1])
// }
// if (typeof x[0] != 'number' && typeof x[1] == 'number') {
//     return x[1]
// }
// if (typeof x[0] == 'number' && typeof x[1] != 'number') {
//     return x[0]
// } 
// if (typeof item[0] != 'number' && typeof item[1] != 'number') {
//     return 'Void!'
// }
// if (typeof item[0] == 'number' && typeof item[1] == 'number') {
//     return score += x[0] + x[1]
// }
// if (typeof item[0] != 'number' && typeof item[1] == 'number') {
//     return score += item[1]
// }
// if (typeof item[0] == 'number' && typeof item[1] != 'number') {
//     return score += item[0]
// } 