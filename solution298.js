// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

//? Parameters: a string of letters each letter has a weight attached to it 

//? Return: one of three stings depending on the weight

//? Example:
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

//? Pseudocode: var split()
//? var rightSide that holds the value of each char
//? var leftSide  that holds the value of each char
//? reduce()


function alphabetWar(fight) {      // called time
   const splitStr = fight.split('')
   const rightSide = ["s", "b", "p", "w"].reduce((sum, curr, index) => sum + curr, 1)
   const leftSide = ["z", "d", "q", "m"]

   return splitStr
}
console.log(alphabetWar('z'))
// Test.assertEquals( alphabetWar("z") , "Right side wins!" );
// Test.assertEquals( alphabetWar("zdqmwpbs") , "Let's fight again!" );
// Test.assertEquals( alphabetWar("zzzzs"), "Right side wins!" );
// Test.assertEquals( alphabetWar("wwwwww"), "Left side wins!" );