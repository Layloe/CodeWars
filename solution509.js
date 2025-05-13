// Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

// So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

// Example:

// "Sky scra per" -> "Skyscraper"
// If the building contains no ghosts, return the string:

// "You just wanted my autograph didn't you?"

function ghostBusters(building) {
    const ifWhiteSpace = building.split('').map(item => item.includes(' ') ? item.split(' ').join('') :
    "You just wanted my autograph didn't you?"
    )
    //     if (item.includes(' ')) {
    //         return building.split(' ').join('') + 'Nope, there may still be a ghost in the building. Try again.'
    //     } else {
    //         return "You just wanted my autograph didn't you?", 'Nope, as there were no ghosts in the BusStation you need to return a witty retort.'
    //     }
    // })

    return ifWhiteSpace
}
console.log(ghostBusters("Factor y"))
// Input is going to be a string with or without whitespace.
// Output is the argument with white spaces removed and one of two strings.
// Test.expect(ghostBusters("Factor y") === "Factory", 'Nope, there may still be a ghost in the building. Try again.');
// Test.expect(ghostBusters("O  f fi ce") === "Office", 'Nope, there may still be a ghost in the building. Try again.');
// Test.expect(ghostBusters("BusStation") === "You just wanted my autograph didn't you?", 'Nope, as there were no ghosts in the BusStation you need to return a witty retort.');