function litres(time) {
    if (time <= 1) {
        return 0
    }
    return  parseInt(time * .5)
  }
  console.log(litres(11.8))

  //Input is going to be a number that is never empty
  //Output is going to be a number will be multiplied by 0.5 and rounded down

  // if input is less than or equal to one return 0 else parseInt(input * .5)
  