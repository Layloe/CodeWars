// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

function switcher(x){
    const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '

    
    return x.map(item => alpha[item])
}
console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']))
// input will be an array of strings 
// output will be a string of letters
    // assert.strictEqual(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
    // assert.strictEqual(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'); 
    // assert.strictEqual(switcher(['4', '24']), 'wc'); 
// create an obj with alphabet then map thru
  