// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

//? Parameters: a string with showing either flat road (_) or bumps (n)

//? Return: a string dependent on count. 'Woohoo!' else 'Car Dead'

//? Example:
// assert.strictEqual(bump("n"), "Woohoo!");
// assert.strictEqual(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
// assert.strictEqual(bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!");
// assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
// assert.strictEqual(bump("______n___n_"), "Woohoo!");

//? Pseudocode: create a var split
// ? filter()
// ? length
// ? join()
//? conditionals 

const assert = require('assert')

function bump(x){
    const splitBumps = x.split('').filter(item => item.indexOf('_')).length <= 15 ? 'Woohoo!' : 'Car Dead'

    return splitBumps
}
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"))

assert.strictEqual(bump("n"), "Woohoo!");
assert.strictEqual(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
assert.strictEqual(bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!");
assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
assert.strictEqual(bump("______n___n_"), "Woohoo!");