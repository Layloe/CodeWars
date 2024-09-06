
function century(year) {
    if(year <= 100) {
        return 1
    }

    return  Math.ceil(year / 100)

  }
  console.log(century(1705))

//input is going to be a number, that is never empty

//if the number is equal to or less than 100 return a 1, if the number is over 101 round up and divide by 100. Include the year as a four digit number of the century

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

//if the number is equal to or less than 100 return a 1, else if the number is over 101 return 4 digit number that is the century. Use method Math.ceil()