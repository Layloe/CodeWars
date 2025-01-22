// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

function switcher(x){
    alphabet_descending = {
        'z': 1,
        'y': 2,
        'x': 3,
        'w': 4,
        'v': 5,
        'u': 6,
        't': 7,
        's': 8,
        'r': 9,
        'q': 10,
        'p': 11,
        'o': 12,
        'n': 13,
        'm': 14,
        'l': 15,
        'k': 16,
        'j': 17,
        'i': 18,
        'h': 19,
        'g': 20,
        'f': 21,
        'e': 22,
        'd': 23,
        'c': 24,
        'b': 25,
        'a': 26,
        '!': 27,
        '?': 28,
        ' ': 29, 

    }
    
    return x.map(item => item.charCodeAt())
}
console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']))
// input will be an array of strings 
// output will be 