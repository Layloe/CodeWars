// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

// Examples
// "WAtErSlIde"                    ==>  1
// "GolDeNSanDyWateRyBeaChSuNN"    ==>  3
// "gOfIshsunesunFiSh"             ==>  4
// "cItYTowNcARShoW"               ==>  0
function sumOfABeach(beach) {

  const WORDS = ['water', 'sand', 'fish', 'sun']
  
  let str = beach.toLowerCase()
  let count = 0;
  
  WORDS.forEach((word) => {
    
    while (str.includes(word)) {
       count += 1
       str = str.replace(word, '')
    }
    
  }) 
  return count;
}
console.log(sumOfABeach("gOfIshsunesunFiSh"))
// Input is a string of random letters.
// OUtput is a number.
// Example above.
// ToLowerCase filter words then length