// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.
// For example, given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
// your function should return true as there is at least one developer from each age group.

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer up to 199.

function isAgeDiverse(list) {
  let results = []
  const getAges = list.map(ages => ages.age).sort((a,b) => a - b)
  for (item of getAges) {
     switch (true) {
    case item < 20 :
       results.push('teens');
    case item < 30 :
       results.push('twenties');
    case item < 40 :
       results.push('thirties');
    case item < 50 :
       results.push('forties');
    case item < 60 :
       results.push('fifties');
    case item < 70 :
       results.push('sixties');
    case item < 80 :
       results.push('seventies');
    case item < 90 :
       results.push('eighties');
    case item < 89 :
       results.push('nineties');
    case item < 100:
       results.push('centenarian');
  }
  }
 
  // const category = ['teens', 'twenties', 'thirties', 'forties', 'fifties', 'sixties', 'seventies', 'eighties', 'nineties', 'centenarian']

  return results

}
console.log(isAgeDiverse(list1))
// Input is an array of objects.
// Output is a boolean dependent on all age groups being validated. 
// Example above.
// Create a dictionary of all age groups. Use a for of loop then add true value if present. Use Object keys and length to get boolean. Use a hash map and if else to push to empty var and then use every method to verify.
