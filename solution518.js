// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

// Examples
// "WAtErSlIde"                    ==>  1
// "GolDeNSanDyWateRyBeaChSuNN"    ==>  3
// "gOfIshsunesunFiSh"             ==>  4
// "cItYTowNcARShoW"               ==>  0

function sumOfABeach(beach) {
  const toLower = [beach.toLowerCase()].filter(item => item !== 'sand' || item !== 'water' || item !== 'fish' || item !== 'sun')
  return toLower
}
console.log(sumOfABeach("sunsunsunsun"))
// Input is a string of random letters.
// OUtput is a number.
// Example above.
// ToLowerCase filter words then length