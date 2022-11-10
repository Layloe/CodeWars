//?-------------------------------------------------------------------------------------------
//+ charAt 
//* What  it does: Takes in an index and a string and returns the specific character at that location

//* How it works: Sees if the specified index passes into the methis matches any index available within the string, then returns the character at that index, if avalible.

//* Time Complexity: 0(1)

//* Examples: 
let text1 = "Sample Text"
console.log(1,text1.charAt(0))
console.log(2,text1.charAt(text1.length-1))
console.log(3,text1.charAt('0'))
console.log(4,text1.charAt('test'))
let test1 = ''
console.log(5,text1.charAt(''))

//?-----------------------------------------------------------------------------------------------
//+ charCodeAt

//* What  it does: Takes in an index value and a string and returns an integer for the UTF-16 value located at that index.

//* How it works:

//* Time Complexity:

//* Examples: 

//?-----------------------------------------------------------------------------------------------
//+ concat

//* What  it does:Takes two strings and join them together and outputsa a single new string. str1 + str2.

//* How it works: Takes in a calling string and concatenates all strings passed in as arguments to the method in sequence

//* Time Complexity:

//* Examples: 
let text3 = "Sample Text"
console.log(1,text3.concat('!'))
console.log(2,text3.concat('!', " 21212121"))
console.log(3,text3.concat('!', 9000))
console.log(4,text3.concat(true))

//?-----------------------------------------------------------------------------------------------
//+ includes 

//* What  it does:Takes in a string as arument anns checks to see if the calling string contans the argument nd returns a boolean. The mehod is case-sensitive. Allso has an optional argument for the postion at which to begin the search.

//* How it works:Searches each character form the starting index value (0 if not specified in the optional argument), and returns canidates that match the input search value. If all retured canidates ,atch the input search value in the same ordeer, then returns true, else false

//* Time Complexity:

//* Examples:
let text4 = "Sample Text" 
console.log(1,text4.includes('Sample'))
console.log(1,text4.includes('sample'))
// console.log(1,text4.includes(Sample))
console.log(1,text4.includes('T'))
console.log(1,text4.includes('!'))

//?-----------------------------------------------------------------------------------------------
//+ indexOf 

//* What  it does::Takes in a string as arument adn searches the calling string for an occurrence of the search string. Returns the idex valie of theFIRST ocurrence. Can take a second, optional argument to start at a specific index withing the calling string.

//* How it works: Search each charectir in the string startung from the postions argument if provided, and return each canidate value that matches the search string, and if a full matches found, return the index value of the first letter of the first occurrence

//* Time Complexity:

//* Examples: 
// let text5 = "Sample Text" 
// console.log(1,text5.indexOf('Sample'))
// console.log(2,text5.indexOf('Sample'))
// console.log(3,text5.indexOf('sample'))
// // console.log(1,txt4.includes(Sample))
// console.log(4,text5.indexOf('T', 10))
// console.log(5,text5.indexOf('!'))

//?-----------------------------------------------------------------------------------------------
//+ match

//* What  it does:Takes a regular expression as an argument and matches it against the calling string . Returns an array of all matching values.

//* How it works: Calls RegExp.prototype[@@match](), creates an array, and returns each matching string as a string within the array.

//* Time Complexity:

//* Examples: 
let text6 = "Sample Text" 
console.log(1,text6.indexOf('Sample'))
console.log(2,text6.indexOf('Sample'))
console.log(3,text6.indexOf('sample'))
// console.log(1,txt4.includes(Sample))
console.log(4,text6.indexOf('T', 10))
console.log(5,text6.indexOf('!'))

//?-----------------------------------------------------------------------------------------------
//+ charAt 

//* What  it does:

//* How it works:

//* Time Complexity:

//* Examples: 

//?-----------------------------------------------------------------------------------------------
//+ charAt 

//* What  it does:

//* How it works:

//* Time Complexity:

//* Examples: 

//?-----------------------------------------------------------------------------------------------
//+ charAt 

//* What  it does:

//* How it works:

//* Time Complexity:

//* Examples: 

//?-----------------------------------------------------------------------------------------------
//+ charAt 

//* What  it does:

//* How it works:

//* Time Complexity:

//* Examples: 

//?-----------------------------------------------------------------------------------------------
//+ charAt 

//* What  it does:

//* How it works:

//* Time Complexity:

//* Examples: 



