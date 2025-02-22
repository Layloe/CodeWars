// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.
const assert = require('assert')
const broken = x => x.split('').map((item, index) => item == '0' ? '1' : '0').join('')
// function broken(x) {
//     let onesAndZeros = []
//     const pushTo =  x.split('').map(item => {
//             if ( item == '0') {
//                 return onesAndZeros.push('1')
//             }
//             if (item == '1') {
//                 return onesAndZeros.push('0')
//             }
//         })
//         return onesAndZeros.join('')
    // return x.split('').map(item => {
    //     if (x.includes('0')) {
    //         return '1'
    //     }
    //     if (x.includes('1')) {
    //         return '0'
    //     }
    // })
    // return x.replaceAll('0', '1') && x.replaceAll('1', '0')
// }
console.log(broken('10000000101101111110011001000'))
// input will be an string of '1' and '0's
// output will be a string on nums that swaps the 1 to 0 and vice versa
assert.strictEqual(broken("1"), "0");
assert.strictEqual(broken("10000000101101111110011001000"), "01111111010010000001100110111");
assert.strictEqual(broken("100010"), "011101");
// try replace all with && for both the 1 and the zero. If that doesn't work try split loop condtionals join. Both didn't work go with hashmap style
