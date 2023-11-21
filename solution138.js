// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

//Parameters: an arr of integers

//Return: an arr of only the elements that are multible of thier own index

//Example:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

//Psuedocode: filter loop, condtional with mafs modulus 
//* learn how to fix edge case 

function multipleOfIndex(array) {
    const testMap = array.filter((item, index) => ( item % index == 0 || item == 0  ))
    return testMap
  }

  console.log(multipleOfIndex([0, 2, 3, 6, 9]))