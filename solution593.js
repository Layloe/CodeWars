// Vowel harmony is a phenomenon in some languages. It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" (wikipedia). This kata is based on vowel harmony in Hungarian.

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
// Preconditions:
// To keep it simple: All words end with a consonant :)
// All strings are unicode strings.
// There are no grammatical exceptions in the tests.

function dative(word) {
    const vowels = 'eéiíöőüű'
    const searchVow = word.split('').find((item, index) => {
        console.log(vowels.indexOf(word))
        if (vowels.indexOf(item)) {
            return word + 'nek'
        } else {
            return word + 'nak'
        }
    })

    return searchVow
}
console.log(dative("ablak"))
// Input is a string that will contain vowels and hungarian vowels.
// Output is a string with 'nek' or 'nak' concatenated to it depending on vowel.
    // [input, expected]
    // ["ablak", "ablaknak"],
    // ["tükör", "tükörnek"],
    // ["keret", "keretnek"],
    // ["otthon", "otthonnak"],
    // ["virág", "virágnak"],
    // ["tett", "tettnek"],
    // ["rokkant", "rokkantnak"],
    // ["rossz", "rossznak"],
    // ["gonosz", "gonosznak"]
// Make a variable containing vowels. Use if else then find method to search for vowels if true return 'nak' else 'nek'