// Write

// function remove(str, what)
// that takes in a string str(text in Python) and an object/hash/dict/Dictionary what and returns a string with the chars removed in what. For example:

// remove('this is a string',{'t':1, 'i':2}) === 'hs s a string'
// remove from 'this is a string' the first 1 't' and the first 2 i's.
// remove('hello world',{'x':5, 'i':2}) === 'hello world'
// there are no x's or i's, so nothing gets removed
// remove('apples and bananas',{'a':50, 'n':1}) === 'pples d bnns'
// we don't have 50 a's, so just remove it till we hit end of string.

function remove(str, what) {
    let res = []
    for (let s of str) {
        if (what[s]) { what[s] -= 1 }
        else         { res.push(s) }
    }
    return res.join("")
}
// function remove(str, what) {
//       let result = [];
//   for (let char of str) {
//     if (what[char]) {what[char] -= 1}
//     else result.push(char)
//   }
// //     const result = [];
// //     for (item of str) {
// //         if (what[item]) --what[item];
// //         else result.push(item);
// //     }

//   return result.join('')
// }
console.log('this is a string',{'t':1, 'i':2})
// Input has two params one to be a string an the other an obj with key value pairs.
// Output is a string with item in object removed.
// Example above.
// Hashmap.