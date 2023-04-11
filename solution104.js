// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

//Parameters: Takes in a str of words

//Example:
// assert.deepEqual(addLength('you will win'),["you 3", "will 4", "win 3"])

//Return: An arr with the length of each word added to each element

//Psuedocode: Use method split to transform str to arr add length logic and possibly templete literals to insert length num



function addLength(str) {
    // let arr = str.split(' ').map(value => {
    //     value.length
    // })
    // return(arr)
    // let arr = str.split(' ') 
    // console.log(arr)
    // let test= arr.map(value => `${value}${value.length}`)
    // for(let i = 0; i < arr.length; i++) {
    //     let lengthNum = arr[i].length 
    //     console.log(lengthNum)
    // }
 
    

    return str.split(' ').map(value => `${value} ${value.length}`)
    

    
    }

console.log(addLength('you will win'))

    // assert.deepEqual(addLength('you will win'),["you 3", "will 4", "win 3"])
    