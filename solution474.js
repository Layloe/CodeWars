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

function containAllRots(strng, arr) {
    const sortArrStr = arr.sort((a, b) => a.localeCompare(b) - b.localeCompare(a))
    return sortArrStr
}
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]))
// Input will be am array of strings
// Output is a boolean
// testing(containAllRots("", []), true)
// testing(containAllRots("", ["bsjq", "qbsj"]), true)
// testing(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true)
// testing(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]), false)
// Best guess is to sort 