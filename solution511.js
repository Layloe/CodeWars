// A new task for you!

// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
// Examples
// "09:10:01" -> "09:10:01"  
// "11:70:10" -> "12:10:10"  
// "19:99:99" -> "20:40:39"  
// "24:01:01" -> "00:01:01"  
// If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

function timeCorrect(timestring) {
    // const timeParse = timestring.split(':').map((item, index) => {
    //     if (item > 59) {
    //        return item % 60
    //     } else {
    //         return item
    //     }
    // }) 
  return timestring.toLocaleTimeString('en-GB', { // skip for now
    hour12: false,
    hour:   '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}
console.log(timeCorrect("11:70:10"))
// Input is going to be a string containing a time stamp.
// Output is a string in a 24 hour format.
// Test.assertEquals(timeCorrect("09:10:01"), "09:10:01");
// Test.assertEquals(timeCorrect("11:70:10"), "12:10:10");
// Test.assertEquals(timeCorrect("19:99:09"), "20:39:09");
// Test.assertEquals(timeCorrect("19:99:99"), "20:40:39");
// Test.assertEquals(timeCorrect("24:01:01"), "00:01:01");
// Test.assertEquals(timeCorrect("52:01:01"), "04:01:01");
// Search up a method date method that might save me a lot of time. Darn I guess not now to split with : delimiter map and use conditionals to see if item is over 59 and get the remainder to add to index 