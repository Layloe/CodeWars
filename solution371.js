// const stopWatch = {}

// stopWatch.hours = 24
// stopWatch.minutes = 60
// stopWatch.seconds = 60

function hashMapRecall(arr) {
    let objCount = {}
    for (const currentItemInLoop of arr) {
        if (objCount[currentItemInLoop]){
            objCount[currentItemInLoop]++
        } else {
            objCount[currentItemInLoop] = 1
        }
    }
    return objCount
}
console.log(hashMapRecall([2,4,5,6,7,8,9,9,9,5,5]))

//Speed run 8kyu code challenges

// Write a function to split a string and convert it into an array of words.
// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function string_to_array(str) {
    return str.split(' ')
}
console.log(string_to_array("I love arrays they are my favorite"))
//input is going to be a string
//output is going to be an array with the words of the string seperated by ","
// "Robin Singh" ==> ["Robin", "Singh"]
//going to use the method split() to turn into an arr
