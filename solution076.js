// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

//Parameters: An array of junk but containing one "needle" str

//Retrun: Find the needle string and it's index with a return a message in template litterals that says:

// "found the needle at position " plus the index it found the needle,

//Example:
// Test.assertNotEquals(findNeedle(haystack_1), undefined, "Your function didn't return anything");
// Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
// Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
// Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')

//Psuedocode: Use method indexOf(), using template literals with the str "Your function didn't return anything"or
//`found the needle at ${}`


function findNeedle(haystack) {
    if (undefined) {
        return 'Your function didn\'t return anything'
        
    } else {
        
      return `found the needle at position ${haystack.indexOf('needle')}` 
 
    }
    
    }
    //? Couldn't get myself to call time on this but found the solution anyway ^^
    
  


  console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))

// Test.assertNotEquals(findNeedle(haystack_1), undefined, "Your function didn't return anything");
// Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
// Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
// Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')