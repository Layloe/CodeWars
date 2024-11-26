// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


function conditional(arr) {
    // const filterGood = arr.filter(item => item == 'good')
    // if (filterGood.length == 1 || filterGood.length == 2) {
    //     return 'Publish!'
    // }
    // if (filterGood.length > 2) {
    //     return 'I smell a series!'
    // } else {
    //     return 'Fail!'
    // }


    // let count = 0
    // for (const curr of arr) {
    //     if (curr == 'good') {
    //         count++ 
    //     }
        // if (i == 'good') {
        //     count ++
        // }
        // if (count == 1 || count == 2) {
        //     return 'Publish!'
        // }
        //     if (count.length > 2) {
        //     return 'I smell a series!'
        // } else {
        //     return 'Fail!'  
        // }    
    // }
    // return count 

    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (i == 'good') {
            count ++
        }
        if (count == 1 || count == 2) {
            return 'Publish!'
        }
            if (count.length > 2) {
            return 'I smell a series!'
        } else {
            return 'Fail!'
    }
    }
    return count
}
console.log(conditional(['bad', 'bad', 'bad', 'good', 'good']))

//input is going to be an array of strings
//output is going to be one of three strings depending on the array contents.
// 'bad' 'Publish!' 'Fail!'
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!')
// loop thru arr and use ifelse conditionals and return one of the three strings.