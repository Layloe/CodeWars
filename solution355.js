
function last(x){
    const splitStr = x.split(' ').sort((a,b) => a.slice(-1).localeCompare(b.slice(-1)))
    return splitStr
}
console.log(last('man i need a taxi up to ubud'))

//input is going to be a string of words and is never empty

//output is going to be an split array of the words in the string alphabetically sorted by the last letter 

//i.e ('man i need a taxi up to ubud') => ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);

//split string then sort by last index //googled localeCompare() method to assist in sort