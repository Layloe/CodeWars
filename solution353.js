
function calc(x){
    const charToASCIInum = x.split('').map(char => char.charCodeAt(0)).join('')
    const replaceSevenToOne = charToASCIInum.replaceAll(7,1)
    
    return  charToASCIInum - replaceSevenToOne
}
console.log(calc('abcdef'))

//Input is going to be a string of random letters. Never empty

//Output is going to be number or a sum

//Examples :
//Step1.

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667 = total1

//Step2. Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
// -             ^
// total2 = 656661
//               ^
//Step3.
//   (6 + 5 + 6 + 6 + 6 + 7) total1
// - (6 + 5 + 6 + 6 + 6 + 1) total2
// -------------------------
//                        6  = sum             

//declare a variable to change each char in the string into a ASCII num then join, first I'm going to split each char into an array then map over each char to transform into a number using charCodeAt(0) and then join to get all the numbers in one

//declare a variable to change each char that contains the number 7 and replace it with a 1. I will use method replaceAll.

//subtract one num from the other in the return