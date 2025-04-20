// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

function switcher(x){
    const alphabet = [
        'a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'
      ]
    const findLetter = alphabet.reverse().map((item, index) => {
        // const letters = charCodeAt(0) - 96
        if (item[index] !== x[index]) {
            return item
        }
    })
    return findLetter
}
console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']))
// Input is an array of strings that are numbers
// Output is a string
    // assert.strictEqual(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
    // assert.strictEqual(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'); 
    // assert.strictEqual(switcher(['4', '24']), 'wc'); 
// Search the net for array alphabet then map thru alphabet and get corresponding index then reverse and join.