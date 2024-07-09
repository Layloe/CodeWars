// Our friend Pac has finally decided to pursue a career in the coding industry.
// He is a newbie, he needs to learn properly.
// Therefore, Pac wants to apply for the worldwide famous -and very demanding-
// 'C0d3r 1ns1d3' Academy for beginners.
// In order to join, Pac is required to solve a series of 3 exercises about 'Bug Fixes'.
// He has been sent an email from the Academy with the following instructions,

// Dear Pac,  
// This is the first exercise. Find out what's wrong and fix the code.  
// You have 15 minutes to send a solution.  
// Good Luck.
// This code is a mess! Would you help Pac to fix the code in time?

// (This might be helpful -> Math.random();)

//? Parameters: a num

//? Return: one of three strings

//? Example: none

//? Pseudocode: debug: restructure func, fix conditionals 

const assert = require('assert')

 function yourFutureCareer(career) { //called time, pick up on tests
   
    if (Math.random(career) <= 0.32) {
        return "FrontEnd Developer"
    } else if (Math.random(career) <= 0.65) 
        return  'BackEnd Developer'
     else {
        return 'Full-Stack Developer'
    }
        
}

console.log(yourFutureCareer());

assert.strictEqual(yourFutureCareer() career <= 0.32), "FrontEnd Developer");
assert.strictEqual(yourFutureCareer() career <= 0.65, 'BackEnd Developer');
assert.strictEqual(yourFutureCareer((career) > 0.65), 'Full-Stack Developer');

// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message) 
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message) 