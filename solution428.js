// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];

// write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.

function getAverageAge(list) {
  return list.reduce((sum, curr) => sum + curr.age, 0) / list.length
    // let ages = []
    // if (list.length < 1) {
    //   return list[age]
    // }
    // const findAge = list.forEach(item => ages.push(item.age))

    // return Math.round((ages[0] + ages[1]) / 2)
  }
  console.log(getAverageAge(
    [
        { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
        { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
    ]
  ))

  // input will be an array with containing two objects
  // output is going to be a number with that will be rounded to integer
  // see examples above 
  // first we need to loop through obj with a for of, to find age. declare a var that will hold our num then divide and use Math.ceil.