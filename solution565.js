// Description:
// You've got a bunch of textual data with embedded phone numbers. Write a function area_code() that finds and returns just the area code portion of the phone number.

// >>> message = "The supplier's phone number is (555) 867-5309"
// >>> area_code(message)
// '555'
// The returned area code should be a string, not a number. Every phone number is formatted like in the example, and the only non-alphanumeric characters in the string are apostrophes ' or the punctuation used in the phone number.
const assert = require('assert')

function areaCode(text) {      
    const areaCodeStart = text.indexOf('(')
    const areaCodeEnd = text.indexOf(')')

    return text.slice(areaCodeStart + 1, areaCodeEnd)
}
console.log(areaCode("The supplier's phone number is (555) 867-5309"))
// Input is a string.
// Output is a string of three numbers.
    assert.strictEqual(areaCode("The supplier's phone number is (555) 867-5309"), '555');
    assert.strictEqual(areaCode("Grae's cell number used to be (123) 456-7890"), '123');
    assert.strictEqual(areaCode("The 102nd district court's fax line is (124) 816-3264"), '124');
// Use indexOf to find the start and the end of nums then slice at index nums.