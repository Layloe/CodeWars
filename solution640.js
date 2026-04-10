// Input:

// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr
// false otherwise
// Examples:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
// Note:
// Though not correct in a mathematical sense

// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true

function containAllRots(string, arr) {
    for (var i = 0; i < string.length; i++) {
        if (arr.indexOf(string.slice(i) + string.slice(0, i)) === -1) {
            return false
        }
    }
    return true
    // let results = {}

    // for (string of arr) {
    //     for (char of string) {
    //         if ()
    //         return // return here to finish hashmap and to play with it a bit.
    //     }
    //     if (results[string]) {
    //         return results[string]
    //     } else {
    //         return results[string] = 1
    //     }
    // }
    // return results
}
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]))


// Input has two parameters one is a string and the other an array of strings.
// Output is a boolean.
    // testing(containAllRots("", []), true)
    // testing(containAllRots("", ["bsjq", "qbsj"]), true)
    // testing(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true)
    // testing(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]), false)
// Look up what rotations and use a hashmap
