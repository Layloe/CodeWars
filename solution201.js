// Alan is known for referring to the temperature of the apple turnover as Hotter than the sun!. According to space.com the temperature of the sun's corona is 2,000,000 degrees Celsius, but we will ignore the science for now.

// Task
// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

// Note: Input will either be a positive integer (or a string for untyped languages).

//? Prameters:a positive integer (or a string represention of a number)

//? Return: two strings dependent outcome of sum

//? Example:
// assert.strictEqual(apple('50'), 'It\'s hotter than the sun!!'); 
// assert.strictEqual(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.'); 

//? Psuedocode: find out how to square a num
//? use condtionals

const assert = require('assert')
const apple = x => x **2 >= 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'

function apple(x){

    return x ** 2 >= 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'
}
console.log(apple(4))


assert.strictEqual(apple('50'), 'It\'s hotter than the sun!!'); 
assert.strictEqual(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.'); 