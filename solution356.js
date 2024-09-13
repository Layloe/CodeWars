
function insertDash(num) { // time 
    const numToStr = String(num).split('').map((item, index) => item % 2 > 0 && index + 1 % 2 > 0 ? item + '-' : item )
    return numToStr
 }
 console.log(insertDash(454793))

 //input is going to be a number and will always be a non-negative number, is never empty

 //output is going to be a string that  that will insert dashes ('-') between each two odd digits in num

 //example: if num is 454793 the output should be 4547-9-3.

 //first thing is to change a number into a string, then split to array, then map over the array to check if there are two consecutive odd numbers, if true insert dashes between odd numbers
