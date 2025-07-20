// Task:
// Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

// Vowel Harmony Rules (simplified)
// When the last vowel in the word is

// a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
// a back vowel (a, á, o, ó, u, ú) the suffix is -nak
// Examples:
// dative("ablak") == "ablaknak"
// dative("szék") == "széknek"
// dative("otthon") == "otthonnak"

function dative(word) {
    const findLastVow = word.split('').filter((item, index) => 'eéiíöőüűaáoóuú'.includes(item)).slice(-1)
    console.log(findLastVow)
    if ('eéiíöőüű'.includes(findLastVow)) {
        return word + 'nek'
    } 
    if ('aáoóuú'.includes(findLastVow)) {
        return word + 'nak'
    }
}
console.log(dative("virág"))

// Input is a string.
// Output is the same string but with either nak or nek concatenated to the end of the string.
// Example is above.
// Split filter vowels then slice -1, with if else to check vowel. If else to concat 'nek' or 'nak   