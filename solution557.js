// Create a function called reverse for the String prototype that will allow the following functionality:

// "String".reverse();// => returns "gnirtS"
// "Super awesome string".reverse();// => returns "gnirts emosewa repuS"

String.prototype.reverse = function() {

    return this.split('').reverse().join('')
}
console.log(reverse("Super awesome string"))

// Input is a string.
// Output is reversed string.
    // assert.strictEqual("String".reverse(), "gnirtS");
    // assert.strictEqual("Another string".reverse(), "gnirts rehtonA");
// First split then reverse and join. 