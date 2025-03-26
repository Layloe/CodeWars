// Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

// To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

// the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

// Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

// Given a seat number, your task is to return the seat location in the following format:

// '2B' would return 'Front-Left'.

// If the number is over 60, or the letter is not valid, return 'No Seat!!'.
    function locationWord(a) {
        if (parseInt(a) > 1 && parseInt(a) <= 20) {
             return 'Front'
        }
        if (parseInt(a) > 21 && parseInt(a) <= 40) {
             return 'Middle'
        }
        if (parseInt(a) > 40) {
             return 'Back'
        }
    }

    function locationWordB(a) {
        if (a.includes('A') || a.includes('B') || a.includes('C')) {
            return '-Left'
            console.log(a.includes('B'))
        }
        if (a.includes('D') || a.includes('E') || a.includes('F')) {
            return '-Middle'
        }
        if (a.includes('G') || a.includes('K') || a.includes('L')) {
            return '-Right'
        }
    }

function planeSeat(a){
    if (parseInt(a) < 1 || parseInt(a) > 60 || a.includes('J') || a.includes('I')) {
        console.log(parseInt(a))
        return 'No Seat!!'
    }
       
    return `${locationWord}${locationWordB}`
}
console.log(planeSeat('2B'))

// Input will be a string of two chars, one number and one letter
// Output is going to be a string that is a combination of two conditionals else 'No Seat'
    // assert.strictEqual(planeSeat('2B'), 'Front-Left');
    // assert.strictEqual(planeSeat('20B'), 'Front-Left');
    // assert.strictEqual(planeSeat('58I'), 'No Seat!!');
// Use index numbers and conditionals 
