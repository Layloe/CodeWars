// There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

// In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

// Let's see:

// For Javascript
// nextPal(11) == 22

// nextPal(188) == 191

// nextPal(191) == 202

// nextPal(2541) == 2552
// You will be receiving values higher than 10, all valid.

// Enjoy it!!

function nextPal(val) {
        let results = val + 1
        while (String(results) !== String(results.split('').reverse('').join(''))) {
            results++
        }
    
    return results
}
console.log(nextPal('11'))
// Input is a number.
// Output is a number that is a palindrome.
    // assert.strictEqual(nextPal(11), 22)
    // assert.strictEqual(nextPal(188), 191)
    // assert.strictEqual(nextPal(191), 202)
    // assert.strictEqual(nextPal(2541), 2552)
// Create a loop that starts at val then checks each number, if reverse == val then return num else keep going.
