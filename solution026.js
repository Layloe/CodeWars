// Parameters - a string witha varying number of words in it. Words may have punctuation marks separated by a space 
// Result - A string of on or multible words seperated by spaces with 'ay' apppended to the end of each word UNLESS that word is a punctuation mark.
// Examples - pigIt ('Pig Latin is cool'), igPay atinay siay oolcay
// Pseudocode - Split the string into two parts, the first letter, and the rest of the string. Reverse the order of these parts, and concatinate them back together. Check if a word is actually a punctuation mark and if it is NOT, then add 'ay' to the end Concaenate the individual word back into a single sting and return.

//push, slice, charCodeAt, split, join, map



function pigIt(string) {
    let marks = ['.', '!', '?', '"', ',']
    result = string.split(' ').map(word =>
         word.slice(1) + word[0] + (marks.includes(word) ? '' : 'ay')).join(' ')
    console.log(result)
}

pigIt('Hello world !')