
function toNumberArray(string2Array) {

    return string2Array.map(Number)
}
console.log(toNumberArray(["1.1","2.2","3.3"]))

//input is going to be a an array of strings representation of numbers and is never empty
//output is going to be an array of numbers

//ie:["1", "2", "3"] to [1, 2, 3]

//use method map with Number constructor as a parameter


