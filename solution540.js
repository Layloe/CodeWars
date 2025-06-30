// You receive some random elements as a space-delimited string. Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).

// Return:

// 0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
// 1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
// n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")
// Examples
// "1 2 3 4"  ==>  return 0, because the sequence is complete

// "1 2 4 3"  ==>  return 0, because the sequence is complete (order doesn't matter)

// "2 1 3 a"  ==>  return 1, because it contains a non numerical character

// "1 3 2 5"  ==>  return 4, because 4 is missing from the sequence

// "1 5"      ==>  return 2, because the sequence is missing 2, 3, 4 and 2 is the lowest

function findMissingNumber(sequence){
  const sortSeq = sequence.split(' ').sort()
  return sortSeq

}
console.log(findMissingNumber("1 2 3 5"))
// Input is a string of numbers/chars separated by white space.
// Output is a single number dependent on sequence.
    // assert.strictEqual(findMissingNumber("1 2 3 5"), 4, "It must work for missing middle terms");
    // assert.strictEqual(findMissingNumber("1 3"), 2, "It must work for missing middle terms");
    // assert.strictEqual(findMissingNumber("1 5"), 2, "It must work for missing more than one number");
    // assert.strictEqual(findMissingNumber(""), 0, "It must return 0 for an empty sequence");
    // assert.strictEqual(findMissingNumber("1 2 3 4 5"), 0, "It must return 0 if no number is missing");
    // assert.strictEqual(findMissingNumber("2 3 4 5"), 1, "It must return 1 for a sequence missing the first element");
    // assert.strictEqual(findMissingNumber("2 6 4 5 3"), 1, "It must work for a shuffled input");
    // assert.strictEqual(findMissingNumber("2 1 4 3 a"), 1, "It must return 1 for an invalid sequence");
// Make a var that will sort and split on white space.