// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// Notes:

// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.

function countDevelopers(list) {
    let devCount = 0
    for (const curr of list) {
        if (curr.language == 'JavaScript' && curr.continent == 'Europe') {
            devCount += 1
        }
    }
    return devCount
  }
  console.log(countDevelopers([{"firstName":"Sofia","lastName":"I.","country":"Argentina","continent":"Americas","age":35,"language":"Java"},{"firstName":"Fatima","lastName":"H.","country":"Pakistan","continent":"Asia","age":28,"language":"JavaScript"},{"firstName":"Lukas","lastName":"X.","country":"Croatia","continent":"Europe","age":35,"language":"Python"},{"firstName":"Joshua","lastName":"O.","country":"Isle of Man","continent":"Europe","age":39,"language":"Clojure"},{"firstName":"Manuel","lastName":"C.","country":"Equatorial Guinea","continent":"Africa","age":22,"language":"Ruby"},{"firstName":"Sofija","lastName":"Q.","country":"Latvia","continent":"Europe","age":29,"language":"Ruby"},{"firstName":"Joao","lastName":"D.","country":"Portugal","continent":"Europe","age":35,"language":"JavaScript"},{"firstName":"Oliver","lastName":"P.","country":"Wales","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Hanna","lastName":"L.","country":"Hungary","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Sofia","lastName":"P.","country":"Italy","continent":"Europe","age":41,"language":"Clojure"},{"firstName":"Marian","lastName":"N.","country":"Colombia","continent":"Americas","age":55,"language":"Python"},{"firstName":"Odval","lastName":"F.","country":"Mongolia","continent":"Asia","age":38,"language":"Python"},{"firstName":"Harry","lastName":"K.","country":"Brazil","continent":"Americas","age":19,"language":"Python"},{"firstName":"Emilija","lastName":"S.","country":"Lithuania","continent":"Europe","age":19,"language":"Python"}]))
  //input is going to be an array of objects
  //output will be a number; 1 for true and 0 for falsy
  //example above
  //loop thru the arr then use conditionals to find matches


//   Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

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
const assert = require('assert')
function calc(x){
    let total1 = 0
    let total2 = 0
    const toNum = x.split('').map(char => char.charCodeAt(0)).join('')
    for (const curr of [...toNum]) {
        const toNumForRealsNow = parseInt(curr,10)
        total1 += toNumForRealsNow
        total2 += (toNumForRealsNow === 7 ? 1 : curr)
    }
  return  total1 
}
console.log(calc('abcdef'))
//input is going to be a string of letters
//output will be a number, the sum of ascii
    assert.strictEqual(calc('abcdef'), 6);
    assert.strictEqual(calc('ifkhchlhfd'), 6); 
    assert.strictEqual(calc('aaaaaddddr'), 30); 
    assert.strictEqual(calc('jfmgklf8hglbe'), 6);  
    assert.strictEqual(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96);   
//first transform string to ascii by using a for of loop. Create two vars to put first total and second total