
function paperwork(n, m) {
  if( n <= 0 || m <= 0) {
    return 0
  }
  if( n > 0 || m > 0) {
    return n * m
  }
  
}
console.log(paperwork(5,5))

//input is going to have two parameters. Input is always going to be a number.

//output is going to be a single number

//n= 5, m=5: 25
//n=-5, m=5:  0

// if either 'n' or 'm' input is less than or equal to 0, return 0. If both numbers are positive multiply both parameters to return a sum