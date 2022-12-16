// Alan is known for referring to the temperature of the apple turnover as Hotter than the sun!. According to space.com the temperature of the sun's corona is 2,000,000 degrees Celsius, but we will ignore the science for now.

// Task
// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

//Parameters: A string or a postive num

//Return: If x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

//Example:
    // assert.strictEqual(apple('50'), 'It\'s hotter than the sun!!'); 
    // assert.strictEqual(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.'); 

//Psuedocode: Use Math methods

const assert = require('assert')



function apple(x){
    if (Math.pow(x, 2) > 1000) {
       return ("It's hotter than the sun!!")
    } else {
       return ("Help yourself to a honeycomb Yorkie for the glovebox.")
    }

}
 

apple('50')

    assert.strictEqual(apple('50'), 'It\'s hotter than the sun!!'); 
    assert.strictEqual(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.'); 