// Task
// The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information
// Rules
// 1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

// 6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

// 7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

// 9–10: The date within the month of birth

// 11: The year digit from the year of birth (e.g. for 1987 it would be 7)

// 12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name

// 14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

// 15–16: Two computer check digits. We will always use "AA"
// Your task is to code a UK driving license number using an Array of data. The Array will look like

// data = ["John","James","Smith","01-Jan-2000","M"];
// Where the elements are as follows

// 0 = Forename
// 1 = Middle Name (if any)
// 2 = Surname
// 3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
// 4 = M-Male or F-Female
// You will need to output the full 16 digit driving license number.

// Good luck and enjoy!
function driver(data) {
    let plateNumber = []
    if (data[2].length <= 5) {
      const fillLength = 5 - data[2].length
      plateNumber.push(data[2]) 
      // console.log(plateNumber.fill('9'))
    } 
    plateNumber.push(data[3].slice(-2, -1))
    const month = new Date(data[3]).toString().slice(8, 10)
    console.log(data)
    if (data[-2] == 'F') {
      plateNumber.push(month[0] + 5 && month[1] + 5)
    }
    plateNumber.push(month)
    console.log(month)

      data.forEach((item, index, arr) => {      
    });

    return plateNumber
  }
  console.log(driver(["John","James","Smith","01-Jan-2010","F"]))
  
  // input is going to be an array containing strings 
  // output will be a 16 digit string containing uppercase letters and numbers
  //  
  // Test.assertEquals(driver(data), "SMITH001010JJ9AA", "Should return 'SMITH001010JJ9AA'")
  // Test.assertEquals(driver(data), "GIBBS862131J99AA", "Should return 'GIBBS862131J99AA'")
  // Test.assertEquals(driver(data), "LEE99809021AR9AA", "Should return 'LEE99809021AR9AA'")
  //
  // This challenge will contain multiple steps. I will start with the first step then after solving the step continue to the next and so on.
  // 1. Grab the surname using index then use conditionals to see if length is < 5 if true use method padEnd and fill it with '9's