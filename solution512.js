// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
//     meal: 'vegetarian' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
//     meal: 'standard' },
//   { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
//     meal: 'vegan' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
//     meal: 'vegetarian' },
// ];
// your function should return the following object (the order of properties does not matter):

// { vegetarian: 2, standard: 1, vegan: 1 }

function orderFood(list) {
  let preferredMeal = {}
  for (item of list) {
    if (!preferredMeal[item.meal]) {
       preferredMeal[item.meal] = 1
    } else {
       preferredMeal[item.meal] += 1
    }
  }
  return preferredMeal
}
console.log(orderFood([
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
]))

// Input is an array of objects.
// Output is an object of the type of meal devs prefer
// Example above
// Hash map