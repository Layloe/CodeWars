// You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!

//? Parameters: two objs

//? Return: object pushed to var items

//? Example: look at test cases

//? Pseudocode: debug: add () to push method to fix issue of not pushing to empty arr

items = []
items.push({a: "b", c: "d"})
console.log(items)

// assert.isNotEmpty(items, 'The array is still empty')
// assert.lengthOf(items, 1, 'The array contains too many values')
// assert.deepEqual(items, [{a: "b", c: "d"}], 'The array does not contain the correct value"')