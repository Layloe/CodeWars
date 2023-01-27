const assert = require('assert')

function getDayOfWeek(dateString) {
    const myDate = new Date(dateString)
        month = myDate.getMonth(),
        date = myDate.getUTCDate(),
        day = myDate.getUTCDay()

    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    let months  = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return weekday[day].toLowerCase()
    // hint: you can create a Date with "new Date(dateString)"
    // hint: you can use the `getUTCDay()` method to get a number corresponding to the week day,
    // for example 0 = sunday, 1 = monday, etc
    // TODO
  }

  console.log(getDayOfWeek("2023-01-19T13:00:00Z"))
  
  assert.strictEqual(getDayOfWeek("2023-01-18T03:00:00Z"), "wednesday");
  assert.strictEqual(getDayOfWeek("2023-01-17T03:00:00Z"), "tuesday");
  assert.strictEqual(getDayOfWeek("2023-01-19T13:00:00Z"), "thursday");
      
      
      
      // { "2023-01-15T03:00:00Z" },
      // { "2023-01-16T03:00:00Z" },
      // { "2023-01-17T03:00:00Z" },
      // { "2023-01-18T03:00:00Z" },
      // { "2023-01-19T03:00:00Z" },
      // { "2023-01-20T03:00:00Z" },
      // { "2023-01-21T03:00:00Z" },