// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//Parameters: Takes in a no-negitive integer(num)

//Return: Returns a string with a murmur: "1 sheep...2 sheep...3 sheep..." equal to the num. This example had the argument as the num (3)

//Example:
//     assert.strictEqual(countSheep(0), "");
//     assert.strictEqual(countSheep(1), "1 sheep...");
//     assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
//     assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");


//Psuedocode: Went a whole diffrent direction with this by trying to use temprete litterals but I should of made a for loop 


const countSheep = (num) => {

    let str = ''
   
    for (let i = 1; i <= num; i++) {
        console.log(str += ` ${i} sheep...`)
    }
   
  }

  countSheep(6)