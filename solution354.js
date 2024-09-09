
function tidyNumber(n){
    return n.sort((a, b) => a - b)
  }
  console.log(tidyNumber(2789))

  //input is always a number and is never empty

  //output is a boolean that is dependent on the order of numbers

  //Input >> Output Examples
  // The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .
  //tidyNumber (12) ==> return (true)

  //going to use sort method and compare 