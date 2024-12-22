// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
const assert = require('assert')
function stringClean(s){
    return s
    .split('')
    .filter(item => !Number(item) ? item.split('0').join('') : null)
    .join('') 
 }
 console.log(stringClean("E3at m2e2!!"))
 //input will be a string of mix char nums/letters
 //output will be a parsed string that has removed the numbers and replaced a few letters from numbers
 assert.strictEqual(stringClean(""), "")
 assert.strictEqual(stringClean("! !"), "! !")
 assert.strictEqual(stringClean("123456789"), "")
 assert.strictEqual(stringClean("(E3at m2e2!!)"), "(Eat me!!)")
 assert.strictEqual(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"), "Dsa cdsc csa!!! I Am cool!")
 assert.strictEqual(stringClean("A1 A1! AAA   3J4K5L@!!!"), "A A! AAA   JKL@!!!")
 assert.strictEqual(stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@"), "Adgre Asad! AAA fvfdvJKL@")
 assert.strictEqual(stringClean("Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 "), "Addsadds A  $$sad! AAAe fKL@ ")
 assert.strictEqual(stringClean("33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 "), "Addsadds A  $$sa!d! A!A!Ae$ f## ")
 assert.strictEqual(stringClean("My \"me3ssy\" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?"), "My \"messy\" data issues! Will they ever, ever be solved?")
 assert.strictEqual(stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3"), "Why can't we buy the good software? #cheapskates")
 //the example code kind of solves this one with an edge case of course. THe '0' thing is trowing me off and I looked up why it's not working. Apparently JS reads all 0's as falsy so it fell through the cracks kind of like I did.. lol 
 //I had to play with this a bit to get it working. First split then filter out numbers with constructor add turnery for the edge case 0 and finally join('')




//  You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL
function array(string) {
    if (string.length < 2) {
        return null
    } else {
        return string.split(',').slice(1,-1).join(' ')
    }
  }
  console.log(array('A1,B2,C3,D4,E5', 'B2 C3 D4'))
  //input is going to be a string of nums
  //output will be will be a new string with first and last indexes removes and separated by spaces or null if length is < 3.
  //('1,2,3', '2')
  //first split using delimiter ',' then slice and join(' ') 
