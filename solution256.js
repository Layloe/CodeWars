// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//? Prameters: an array of strings

//? Return: three possible strings dependent on values 'Fail!' 'Publish!' 'I smell a series!'

//? Example:
// assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');

//? Psuedocode: filter()
//? conditionls


function well(x){
    const wellWellWell = x.filter(item => item == 'good' )
    if (wellWellWell.length == 0) {
        return 'Fail!'
    }
    if (wellWellWell.length <= 1  ) {
        return 'Publish!'
    }
    if (wellWellWell.length >= 2) {
        return 'I smell a series!'
    }

}
console.log(well(['bad', 'bad', 'bad']))

// assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');