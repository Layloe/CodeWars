// Celebrities love to call their children quirky names. The latest trend for baby names is the 'last letter trend'. The rules of the trend are as follows: the first letter of a child's name should be the same as the last letter of their older sibling. For example:

// Suri (1st child), Ireland (2nd child), Diva (3rd child), Aleph (4th child)

// And so on...

// Create a function validName which accepts an array of names. It should return "Congratulations, your baby names are compatible!" if all of the names follow the rule. It should return "Back to the drawing board, your baby names are not compatible." if any of the names do not follow the rule.

// If a couple only has one child, it should return "Congratulations, you can choose any name you like!"

// If the array is empty, it should return "You must test at least one name."

// Notes:
// Names may be hyphenated or two words e.g. Blue Ivy or Jean-Paul
// Names will not include any other characters apart from letters, hyphens or spaces.

function validName(array){
    
    // if (array[0].toLowerCase().slice(-1)) {

    // }
    return  array[0].toLowerCase().slice(-1) === array[1].toLowerCase().slice(0, 1)
} 

console.log(validName(["Cruz", "Zuma"]))
// Input is an array of strings or names.
// Output is one of three strings.
    // assert.strictEqual(validName(["Cruz", "Zuma"]), "Congratulations, your baby names are compatible!" , "Test failed");
    // assert.strictEqual(validName(["Buddy Bear","Romeo", "Olive"]), "Congratulations, your baby names are compatible!" , "Test failed");
    // assert.strictEqual(validName(["Peaches", "Saint", "Theodora", "Ava", "Apple", "Egypt", "Tallulah", "Harlow", "Willow", "Weston", "Nala", "Atlas", "Silas", "Sundance", "Esmeralda", "Angel", "Lily-Rose", "Ever", "Rebel", "Lourdes"]), "Congratulations, your baby names are compatible!" , "Test failed");
    // assert.strictEqual(validName(["Jaden"]),"Congratulations, you can choose any name you like!", "Test failed");
    // assert.strictEqual(validName(["George", "Charlotte"]),"Back to the drawing board, your baby names are not compatible.", "Test failed");
// 
