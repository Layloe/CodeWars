// My 5th kata, and 1st in a planned series of rock climbing themed katas.

// In rock climbing (bouldering specifically), the V/Vermin (USA) climbing grades start at 'VB' (the easiest grade), and then go 'V0', 'V0+', 'V1', 'V2', 'V3', 'V4', 'V5' etc. up to 'V17' (the hardest grade).

// You will be given a list of climbing grades and you have to write a function to return a list of the grades sorted easiest to hardest.

// If the input is an empty list, return an empty list; otherwise the input will always be a valid list of one or more grades.

// Please do vote, rank, and provide any feedback on the kata.

function sortGrades(arr){
 //! Time return to psuedocode and map or hash based on index or use a key.
  return arr.sort()
}
console.log(sortGrades(["V7", "V12", "V1"]))
// Input is a string.
// Output is a sorted string.
    // doTest(["V7", "V12", "V1"], ["V1", "V7", "V12"]);
    // doTest(["V13", "V14", "VB", "V0"], ["VB", "V0", "V13", "V14"]);
    // doTest(["V0+", "V0", "V16", "V2", "VB", "V6"], ["VB", "V0", "V0+", "V2", "V6", "V16"]);
    // doTest(["VB", "VB"], ["VB", "VB"]);
    // doTest(["V7"], ["V7"]);
// Make a variable that contains key string. Then 