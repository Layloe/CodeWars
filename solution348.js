
function dnaStrand(dna){
    
    const complementsObj = {
        'A' : 'T',
        'T' : 'A',
        'C' : 'G',
        'G' : 'C'
    }

    return dna.split('').map(letter => complementsObj[letter]).join('')
  }
  console.log(dnaStrand("ATTGC"))

  //input are going to be strings with capital letters, never going to be empty
  //output is going to br a string with capitol letters, same length as the input,
  //containing the complimentary values to the input

  //set up a dictionary of lookup values and loop through the input, 
  //returning the complementary value for each value from each look up