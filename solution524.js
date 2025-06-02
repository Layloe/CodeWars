// A person's full name is usually composed of a first name, middle name and last name; however in some cultures (for example in South India) there may be more than one middle name.

// Write a function that takes the full name of a person, and returns the initials, separated by dots ('.'). The initials must be uppercase. The last name of the person must appear in full, with its first letter in uppercase as well.

// See the pattern below:

// "code wars"            ---> "C.Wars"
// "Barack hussein obama" ---> "B.H.Obama"
// Names in the full name are separated by exactly one space (' ' ) ; without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.

function initials(n){
    const nameArr = n.split(' ')
    const firstName = nameArr[0].toUpperCase().slice(0, 1) + '.'
    const middleName = nameArr[1].toUpperCase().slice(0, 1) + '.'
    const lastName = nameArr[-1].slice(0, 1).toUpperCase() + nameArr[2].slice(1).toLowerCase()
    //! pick up last name not grabbing last index
    return nameArr.length == 3 ? `${firstName}${middleName}${lastName}` : `${firstName}${lastName}`
}
console.log(initials('code wars'))
// Input is going to be a string of a name containing up to three items.
// Output is a string that first item or second items first letter to upper with '.'
// Example above
// Split with white space and map item. Then use index and if else to slice first char of first or second indexes. If else if arr length > 2 