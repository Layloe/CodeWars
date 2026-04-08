// Create a function which accepts one arbitrary string as an argument, and return a string of length 26.

// The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

// So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.

// For instance:

// "a   **&  cZ"  =>  "10100000000000000000000001"
// "aaaaaaa79345675"  =>  "10000000000000000000000000"
// "&%#*"  =>  "00000000000000000000000000"
'abcdefghijklmnopqrstuvwxyz'
function change(str) {
    const results = []

    for (item of str) {
        if (results[item]) {
            results[item]
        } else {
            results[item] = 1
        }
    }
    // str.split('').forEach((item, index) => {

        // if (results[item]) {
        //     // || item.includes(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
        //     results.push(1)
        // } else {
        //     results.push(0)
        // }
    // })

    return results
}
console.log(change("a **&  bZ"))
// Input is a string that contains letters and symbols.
// Output is a string that contains one's and zero's.
    // assert.strictEqual( change("a **&  bZ"), "11000000000000000000000001" );
// Split string then map, if item is a letter push '1' else push '0'
