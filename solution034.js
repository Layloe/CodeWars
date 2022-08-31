// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"
// Parameters: Has two parameters, one takes in a number other takes in string that needs to be reapeated
// Return: a string repeated by the number passed in n
// Examples:
//  Test.assertSimilar(repeatStr(3, "*"), "***");
//  Test.assertSimilar(repeatStr(5, "#"), "#####");
//  Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
// PsudoCode: Use reapeat function to get results

function repeatStr (n, s) {
    return (s.repeat(n))
  }

  repeatStr(4,'1')