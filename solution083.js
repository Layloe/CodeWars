

/**
 * This is a series of exercises to practice composing functions.
 * The idea is, rather than doing everything in one big function,
 * we can break out the different behaviors we need into separate functions.
 */

/**
 * Task 1:
 * Write a function that gets the day of the week from a date string
 */

//Parameters:

//Example:

//Retrun:

//Psuedocode:


// const assert = require("assert");

// function getDayOfWeek(dateString) {
//        const weekday= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

     
//        const today = new Date()
//        let weekday=new Array(7);

//        if (today == weekday) {
        
//        } else {
        
//        }

// weekday[0]="Sunday";
// weekday[1]="Monday";
// weekday[2]="Tuesday";
// weekday[3]="Wednesday";
// weekday[4]="Thursday";
// weekday[5]="Friday";
// weekday[6]="Saturday";



// console.log(weekday[today]);

 //  let day = weekday[today.getUTCDay()];


      //  weekday.forEach((day) => {
      //   if (getUTCDay() == today) {
      //     console.log(``)
      //   } else {
          
      //   }
      //  })
     

    // if (today == getUTCDay() ) {
    //     console.log('sunday')
    //   } else {
        
    //   }

  
       
        
      // let user = users.find(item => item.id == 1)

      //  return dateString[today.getUTCDay()]

//      weekday[0] { date: "2023-01-15T03:00:00Z" } = "sunday",
//       { date: "2023-01-16T03:00:00Z" } = "monday",
// weekday[2]="tuesday",
// weekday[3]="wednesday",
// weekday[4]="thursday",
// weekday[5]="friday",
// weekday[6]="saturday"
//     ]

// var n = weekday[d.getDay()];


      // { date: "sunday",   "2023-01-15T03:00:00Z" },
      // { date: "monday",   "2023-01-16T03:00:00Z" },
      // { date: "tuesday",  "2023-01-17T03:00:00Z" },
      // { date: "wednesday","2023-01-18T03:00:00Z" },
      // { date: "thursday", "2023-01-19T03:00:00Z" },
      // { date: "friday",   "2023-01-20T03:00:00Z" },
      // { date: "saturday", "2023-01-21T03:00:00Z" },
// ]
// return dateString.getUTCDay()     
    // hint: you can create a Date with "new Date(dateString)"
    // hint: you can use the `getUTCDay()` method to get a number corresponding to the week day,
    // for example 0 = sunday, 1 = monday, etc
  //   // TODO
  // }

  // // console.log(getDayOfWeek("2023-01-16T03:00:00Z"))

  
//   assert.strictEqual(getDayOfWeek("2023-01-18T03:00:00Z"), "wednesday");
//   assert.strictEqual(getDayOfWeek("2023-01-17T03:00:00Z"), "tuesday");
//   assert.strictEqual(getDayOfWeek("2023-01-19T13:00:00Z"), "thursday");