// If you say any of the following words a large bucket of "water" will be dumped on you: "water", "wet", "wash" This is true for any form of those words, like "washing", "watered", etc.

// If you say any of the following phrases you will be doused in "slime": "I don't know", "slime"

// If you say both in one sentence, a combination of water and slime, "sludge", will be dumped on you.

// Write a function, bucketOf(str), that takes a string and determines what will be dumped on your head. If you haven't said anything you shouldn't have, the bucket should be filled with "air". The words should be tested regardless of case.

function bucketOf(str) {
    
    const containsStr = str.toLowerCase().split('').filter(item => '!?\''.includes(item))

    return containsStr.filter(item => !'water' == item)
//   "water", "wet", "wash"
//   "slime"
//   "air"
}
console.log(bucketOf("What is that, WATER?!?"))
// Input is a string.
// Output will be one of three strings.
// bucketOf("What is that, WATER?!?") -> "water"
// bucketOf("I don't know if I'm doing this right.") -> "slime"
// bucketOf("You won't get me!") -> "air"
// Split, filter and use if else and lowercase to see if contains strings. 