// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"
function evenChars(string) {
    let evenArr = []
    if (string.length < 2 || string.length > 100) {
        return "invalid string"
    }
    const findEvenIndex =string.split('').map((item,index) => index % 2 == 0 ? null : evenArr.push(item))
    return evenArr
    }
    console.log(evenChars("abcdefghijklm"))
//input is going to be a string of random chars
//output will be an array of all the even indexed items
    // assert.deepEqual(evenChars ("1234"), ["2", "4"])
    // assert.deepEqual(evenChars (";;;--"), [";", "-"])
    // assert.deepEqual(evenChars ("abcdefghijklm"), ["b", "d", "f", "h", "j", "l"])
//split to arr then map and use index with % 2 == 0 