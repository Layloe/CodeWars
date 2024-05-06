// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

//? Parameters: a string of uppercase letters

//? Return: a string that replaces all 'A->T' 'C->G'
//? Example:
// assert.strictEqual(dnaStrand("AAAA"),"TTTT","String AAAA is")
// assert.strictEqual(dnaStrand("ATTGC"),"TAACG","String ATTGC is")
// assert.strictEqual(dnaStrand("GTAT"),"CATA","String GTAT is")

//? Pseudocode: var split('')
//? map()
//? conditionals
//? includes()
//? replaceAll()
//? join()

const assert = require('assert')

function dnaStrand(dna){
    const doTheSplitsAndSwap = dna.split('').map(item => 
        item.includes("T") ? item.replaceAll('T','A') : item &&
        item.includes("A") ? item.replaceAll('A','T') : item &&
        item.includes("G") ? item.replaceAll('G','C') : item &&
        item.includes("C") ? item.replaceAll('C','G') : item 
        
)
    return doTheSplitsAndSwap.join('')
  }
console.log(dnaStrand("TAACG"))

  assert.strictEqual(dnaStrand("AAAA"),"TTTT","String AAAA is")
  assert.strictEqual(dnaStrand("ATTGC"),"TAACG","String ATTGC is")
  assert.strictEqual(dnaStrand("GTAT"),"CATA","String GTAT is")