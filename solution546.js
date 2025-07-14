// Sort the Vowels!
// In this kata, we want to sort the vowels in a special format.

// Task
// Write a function which takes a input string s and return a string in the following way:

   
//                   C|                          R|
//                   |O                          n|
//                   D|                          d|
//    "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
//                   W|                          T|
//                   |A                          |e
//                   R|                          5|
//                   S|                          T|

// Notes:

// List all the Vowels on the right side of |
// List every character except Vowels on the left side of |
// for the purpose of this kata, the vowels are : a e i o u
// Return every character in its original case
// Each line is seperated with \n
// Invalid input ( undefined / null / integer ) should return an empty string

function sortVowels(s) {
    const vowels = 'AEIOUaeiou'
    const placeVowels = s.split('\n').map(item => { // Fix edge cases
        if (vowels[item]) {
            return `|${item}`.slice(-1)
        } else {
            return `${item}|`.slice(0,-1)
        }
    })
    return placeVowels.join('\n')
}
console.log(sortVowels('R|\nn|\nd|\n |\nT|\n|e\n5|\nT|'))
// Input is going to be a string containing a letter and '|'.
// Output is going to have the a letter and the '|', if the letter is a vowel it should be on the right side. If not should default to left.
// Example is above.
// Split with '\n' then map. Use if else to check if vowel, if true use index to place letters and finally join with '\n' 