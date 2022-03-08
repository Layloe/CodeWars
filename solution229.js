// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

//? Prameters: array of diffrent data types 

//? Return: string if'found the needle at position ${index}' if not "Your function didn't return anything"

//? Example:
// Test.assertNotEquals(findNeedle(haystack_1), undefined, "Your function didn't return anything");
// Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
// Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
// Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')

//? Psuedocode: declare a var
//? filter(item, index) str needle
//? condtionals if undefined



function findNeedle(haystack) {
    const filterArr = haystack.filter(item => item == 'needle') 
    const indexNeedle = haystack.indexOf('needle')
    if (haystack == undefined){
        return "Your function didn't return anything"
    }
    if (filterArr == 'needle') {
        return `found the needle at position ${indexNeedle}`
    }
    return filterArr
  }
  console.log(findNeedle( ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))

// Test.assertNotEquals(findNeedle(haystack_1), undefined, "Your function didn't return anything");
// Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
// Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5') 
// Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')