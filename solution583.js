// Hey CodeWarrior,

// we've got a lot to code today!

// I hope you know the basic string manipulation methods, because this kata will be all about them.

// Here we go...

// Background
// We've got a very long string, containing a bunch of User IDs. This string is a listing, which seperates each user ID with a comma and a whitespace ("' "). Sometimes there are more than only one whitespace. Keep this in mind! Futhermore, some user Ids are written only in lowercase, others are mixed lowercase and uppercase characters. Each user ID starts with the same 3 letter "uid", e.g. "uid345edj". But that's not all! Some stupid student edited the string and added some hashtags (#). User IDs containing hashtags are invalid, so these hashtags should be removed!

// Task
// Remove all hashtags
// Remove the leading "uid" from each user ID
// Return an array of strings --> split the string
// Each user ID should be written in only lowercase characters
// Remove leading and trailing whitespaces

function getUsersIds(str){
  const //! follow pseudocode
}
console.log(getUsersIds("uid12345"), ["12345"])
// Input is a string containing user Id's.
// Output is an array of the string with removed whitespace, uppercase, and remove 'uid' at the start if included.
// Test.assertSimilar(getUsersIds("uid12345"), ["12345"]);
// Test.assertSimilar(getUsersIds("   uidabc  "), ["abc"]);
// Test.assertSimilar(getUsersIds("#uidswagger"), ["swagger"]);
// Test.assertSimilar(getUsersIds("uidone, uidtwo"), ["one", "two"]);
// Test.assertSimilar(getUsersIds("uidCAPSLOCK"), ["capslock"]);
// Trim to lowercase split and filter out all '#'