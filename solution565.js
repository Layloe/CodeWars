// Description:
// You've got a bunch of textual data with embedded phone numbers. Write a function area_code() that finds and returns just the area code portion of the phone number.

// >>> message = "The supplier's phone number is (555) 867-5309"
// >>> area_code(message)
// '555'
// The returned area code should be a string, not a number. Every phone number is formatted like in the example, and the only non-alphanumeric characters in the string are apostrophes ' or the punctuation used in the phone number.

function areaCode(text) {
    const areaCode = text.indexOf('(')
    const textLength = text.length
    return areaCode.slice(areaCode + 1, (textLength - areaCode))
}
console.log(areaCode("The supplier's phone number is (555) 867-5309"))
// Input is a string.
// Output is a string of three numbers.
    // assert.assertEquals(areaCode("The supplier's phone number is (555) 867-5309"), '555');
    // assert.assertEquals(areaCode("Grae's cell number used to be (123) 456-7890"), '123');
    // assert.assertEquals(areaCode("The 102nd district court's fax line is (124) 816-3264"), '124');
// Split and use indexOf then use slice + 1