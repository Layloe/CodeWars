// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  return str.split('').reverse().join('')
}
console.log(solution('world'))
//input is going to be a string
//output will be a string
//first split string then reverse it and finally join it

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    return s.repeat(n)
  }
  console.log(repeatStr(3, "Hello"))
  //input is going to be a num and a string
  //output will be the string repeated x times(num)
  //   6, "I"     -> "IIIIII"
  //use repeat method and passing in num as the argument 