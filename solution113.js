// Order People by age Using Arrow Function
// Sort and Order people by their age using Arrow Functions
// Task
// Your task is to order a list containg people objects by age using the new Javascript Arrow Functions
// Input
// Input will be a valid array with People objects containing an Age and Name
// Output
// Output will be a valid sorted array with People objects sorted by Age in ascending order
// (cond ? a : b)

//Parameters: list containg people objects by age using the new Javascript Arrow Functions

//Return: a valid sorted array with People objects sorted by Age in ascending order

//Example:
// ([ { age: 83, name: 'joel' },
// { age: 46, name: 'roger' },
// { age: 99, name: 'vinny' },
// { age: 26, name: 'don' },
// { age: 74, name: 'brendan' } ]), [{age:26,name:"don"},{age:46,name:"roger"},{age:74,name:"brendan"},{age:83,name:"joel"},{age:99,name:"vinny"}], 'The array is still empty')
//   }); 

//Psuedocode: Simplify function by using arrow function and using sort method

//!Went the hard route again by using map to access the age property in a ordered fashion. Went a to higher level kyu since I finished all useful array challenges on level 8

// function OrderPeople(people) {
//     let test = people.sort((a, b) => a.age - b.age)

//     let property = people.map((value) => ({
//         age: [value.age]
//     }))

//     return test
    
// }



// let OrderPeople = function(people){
//     return people.sort( => ); //complete this function
//   }

  let OrderPeople = (people) => people.sort((a, b) => a.age - b.age)




  console.log(OrderPeople([ { age: 83, name: 'joel' },
  { age: 46, name: 'roger' },
  { age: 99, name: 'vinny' },
  { age: 26, name: 'don' },
  { age: 74, name: 'brendan' } ]))