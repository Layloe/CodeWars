// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.
const assert = require('assert')
const mouthSize = animal => animal.toLowerCase() == 'alligator' ? 'small' : 'wide'
// function mouthSize(animal) {
//     if(animal.toLowerCase() == 'alligator') {
//         return 'small'
//     } else {
//         return 'wide'
//     }
//   }
  console.log(mouthSize("toucan"))
  //input is going to be a string 
  //output is going to be one of two strings dependent on conditionals: "wide" or "small" 
  assert.strictEqual(mouthSize("toucan"),"wide")
  assert.strictEqual(mouthSize("ant bear"),"wide")
  assert.strictEqual(mouthSize("alligator"),"small")
// use a if else and compare the strings. Use method toLowerCase for edge case 


// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}
console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'))
//input will have 3 parameters all of which will be strings
//output will be a formatted string that will include all 3 params
//Hello, John Smith! Welcome to Phoenix, Arizona!
assert.strictEqual(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!')
assert.strictEqual(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'), 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!')
assert.strictEqual(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'), 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')
//use template literals to insert params into correct index. Use join with white space on name arr


// You need to write a function that reverses the words in a given string. Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!
function reverse(string){
    return string.split(' ').reverse().join(' ')
  }
  console.log(reverse('I am an expert at this'))
  //input is going to be string
  //output will be string reversed
//   assert.strictEqual(reverse('I am an expert at this'), 'this at expert an am I');
  assert.strictEqual(reverse('This is so easy'), 'easy so is This');
  assert.strictEqual(reverse('no one cares'), 'cares one no');
  assert.strictEqual(reverse(''), '');
  assert.strictEqual(reverse('CodeWars'), 'CodeWars');
  //use methods split reverse and join remember to include white space


//   Task
// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.
function apple(x){
    if (x** 2 >= 1000) {
        return 'It\'s hotter than the sun!!'
    } else {
        return 'Help yourself to a honeycomb Yorkie for the glovebox.'
    }
   }
   console.log(apple(50))
   //input will be a string representation of a number or a number
   //output will be one of two strings: 'It\'s hotter than the sun!!' or 'Help yourself to a honeycomb Yorkie for the glovebox.'
//    assert.strictEqual(apple('50'), 'It\'s hotter than the sun!!'); 
//    assert.strictEqual(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.');
// use if else to compare the the squared number. Return one of two strings

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
function solution(string) {
    const strToArr = string.split('').map((item, index) => {
        if (item == item.toUpperCase()) {
            return ' ' + item
        } else{
            return item
        }
    })  
    return strToArr.join('')   
  }
  console.log(solution("camelCasing"))
  //input will be a sting that will include camel case format or be empty
  //output will be a string that separates the camel case with a space
  assert.strictEqual(solution("camelCasing"), "camel Casing", `solution("camelCasing")`);
  assert.strictEqual(solution("camelCasingTest"), "camel Casing Test", `solution("camelCasingTest")`);
// split and loop thru and compare if any are upper case. If match get index and splice. 


// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

// Input = ["Peter", "Stephen", "Joe"]
// Output = []
// Input strings will only contain letters.
// Note: keep the original order of the names in the output.
function friend(friends){
    const parseNames = friends.filter(item => item.length <= 4 ? item : null)
    const removeNums = parseNames.filter(item => !Number(item) ? item : null)
    return removeNums
  }
  console.log(friend(["Ryan", "Kieran", "Mark","1234"]))
  //input will be an arr of strings that contain names 
  //output is going to be an arr of names that are < 4 in length
    assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
    assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
    assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
    assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
   // filter names that are < 4 in length. Use Number to filter the nums from names. 