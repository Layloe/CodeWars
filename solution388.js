// Description:
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
const assert = require('assert')
function DNAtoRNA(dna) {
    // return dna.split('').map(item => item.includes('T') ? item.replaceAll('T', 'U') : item).join('')
  }
  console.log(DNAtoRNA('TTTT'))
  assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
  assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
  assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
  //input is going to be a string of combined letters
  //output  a string and will be change any letter in the string containing the char 'T' to 'U' 
  // "GCAT"  =>  "GCAU"
  // first I will split the string to turn it into an array then the filter through and check to see if it includes the char T, finally I will use conditionals to replaceAll
