const assert = require('assert')


function getTimeOfDay(dateString) {

    const myDate = new Date(dateString)
    hours = myDate.getUTCHours()
    if (hours < 12) {
         return "morning"
    } else if (hours < 18 ){
        return "afternoon"
    }else  {
        return "evening"
    }
    // hint: Date objects can return the hours as a number, e.g.
    // new Date("2023-01-09T19:03:04Z").getUTCHours()() => 19
    // new Date("2023-01-09T07:03:04Z").getUTCHours()() => 7
    // Try a simple categorization where before 12 is "morning", from 12-6 is "afternoon", and after 6 is "evening"
    // Don't forget -- hours will be in 24 hour time! (i.e. 17 == 5pm)
  }
  console.log(getTimeOfDay("2023-01-17T11:00:00Z"))
  assert.strictEqual(getTimeOfDay("2023-01-18T03:00:00Z"), "morning");
  assert.strictEqual(getTimeOfDay("2023-01-17T13:00:00Z"), "afternoon");
  assert.strictEqual(getTimeOfDay("2023-01-19T23:00:00Z"), "evening");
  
  /**
   * Task 3:
   * Given a list of objects with a `date` property,
   * return a new list where each object has
   * a new `dayOfWeek` property to the list,
   * which corresponds to the day of the week for the date string
   */
  
  // this is our initial data set.
  // we will be modifying this data throughout all our other functions
  // const data0 = [
  //   { date: "2023-01-05T01:01:01Z" },
  //   { date: "2023-01-05T12:03:04Z" },
  //   { date: "2023-01-06T13:01:01Z" },
  //   { date: "2023-01-06T22:03:04Z" },
  //   { date: "2023-01-07T01:01:01Z" },
  //   { date: "2023-01-07T22:03:04Z" },
  //   { date: "2023-01-08T01:01:01Z" },
  //   { date: "2023-01-08T12:03:04Z" },
  //   { date: "2023-01-09T11:01:01Z" },
  //   { date: "2023-01-09T19:03:04Z" },
  // ];