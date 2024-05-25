// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//? Parameters: a string made up of letters a, b, and/or c

//? Return: a str with a switch of the positions letters a and b

//? Example:
// assert.strictEqual(switcheroo('abc'), 'bac');
// assert.strictEqual(switcheroo('aaabcccbaaa'), 'bbbacccabbb'); 
// assert.strictEqual(switcheroo('ccccc'), 'ccccc');    

//? Pseudocode: var split
// map
// conditionals
// join

const assert = require('assert')

// const switcheroo = x => x.split('').map(letter => letter === 'a' ? 'b' : (letter === 'b' ? 'a' : 'c')).join('')

function switcheroo(x){
    
    const strSwapA = x.split('').map(( item,index) => { 
       if (item.includes('a')) {
        return 'b'
       } else if (item.includes('b')){
        return 'a'
       } else {
        return item
       }
     })

    return strSwapA.join('')
}
console.log(switcheroo('aaabcccbaaa'))

assert.strictEqual(switcheroo('abc'), 'bac');
assert.strictEqual(switcheroo('aaabcccbaaa'), 'bbbacccabbb'); 
assert.strictEqual(switcheroo('ccccc'), 'ccccc');    