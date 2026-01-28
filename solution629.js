// Description:
// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

// Please note the following:

// When a is close to b, return 0.
// For this challenge, a is considered "close to" b if margin is greater than or equal to the absolute distance between a and b.
// Otherwise...

// When a is less than b, return -1.

// When a is greater than b, return 1.

// If margin is not given, treat it as if it were zero.

// Assume: margin >= 0

// Tip: Some languages have a way to make parameters optional.

// Example 1
// If a = 3, b = 5, and margin = 3, then close_compare(a, b, margin) should return 0.

// This is because a and b are no more than 3 numbers apart.

// Example 2
// If a = 3, b = 5, and margin = 0, then close_compare(a, b, margin) should return -1.

// This is because the distance between a and b is greater than 0, and a is less than b.


function closeCompare(a, b, margin) {
    const findNum = a - b 

    return findNum
}
console.log(closeCompare(1.99, 5, 3), -1)
// Input has three parameters and all will contain numbers.
// Output is a will be a '0','-1', and '1' depending in the outcome.
    // assert.strictEqual(closeCompare(4, 5), -1)
    // assert.strictEqual(closeCompare(5, 5), 0)
    // assert.strictEqual(closeCompare(6, 5), 1)
    // assert.strictEqual(closeCompare(-6, -5), -1)

    // assert.strictEqual(closeCompare(2, 5, 3), 0)
    // assert.strictEqual(closeCompare(8.1, 5, 3), 1)
    // assert.strictEqual(closeCompare(1.99, 5, 3), -1)
// Create a conditional that will subtract a from b and then compare to marginal param.