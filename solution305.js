// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:
//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6


//? Parameters: a string of random letters

//? Return: the difference between the sum of the digits in total1 and total2

//? Example:
// assert.strictEqual(calc('abcdef'), 6);
// assert.strictEqual(calc('ifkhchlhfd'), 6); 
// assert.strictEqual(calc('aaaaaddddr'), 30); 
// assert.strictEqual(calc('jfmgklf8hglbe'), 6);  
// assert.strictEqual(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96);

//? Pseudocode: 2 var split
//map
//fromCharCodeAt()
//reduce

function calc(x){ // ran out of time again figure out why so many zeros
    const total1 = x.split('').map((item, index) => item.charCodeAt())
    .join('')
    .split('')
    .reduce((sum, curr) => sum + curr, 0)

    const total2 = x.split('').map((item, index) => item.charCodeAt())
    .join('')
    .split('')
    // .replaceAll('7', '1')
    .reduce((sum, curr) =>  sum + curr.replaceAll('7', '1'), 0)


    return total1 - total2
}
console.log(calc('abc'))

// assert.strictEqual(calc('abcdef'), 6);
// assert.strictEqual(calc('ifkhchlhfd'), 6); 
// assert.strictEqual(calc('aaaaaddddr'), 30); 
// assert.strictEqual(calc('jfmgklf8hglbe'), 6);  
// assert.strictEqual(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96);

