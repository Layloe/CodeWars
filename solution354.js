
function tidyNumber(n){ //ran out of time revisiting tomorrow 
    return String(n).split('').sort().join('') == n
  }
  console.log(tidyNumber(2789))

  //input is always a positive number and is never empty

  //output is a boolean that is dependent on the order of numbers

  //Input >> Output Examples
  // The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .
  //tidyNumber (12) ==> return (true)

  //change number to string using String then split, sort then, join and finally compare to original number