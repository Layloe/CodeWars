// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];
// your function should return true.

// Notes:

// The input array will always be valid and formatted as in the example above.

function isRubyComing(list) {
    return list.some(item => item.language == 'Ruby')
    // return list.map(item => item.language == 'Ruby').includes(true)
  }
  console.log(isRubyComing(
  [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ]
))
// Input will be an array of objects
// Output will be a boolean depending if language == 'Ruby
// Example in console log argument
// Map thru arr and search for match using dot notation and conditionals  
