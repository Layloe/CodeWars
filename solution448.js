// Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

// You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"

// So for this head: "------/------" you shoud return:

// ["-------------", "Unicorn"]
const assert = require('assert')

function bald(x){
    const objResponse = {
        0 : "Clean!",
        1 :"Unicorn!",
        2 : "Homer!",
        3 : "Careless!",
        4 : "Careless!",
        5 : "Careless!",
        6 : "Hobo!"
    }
    const findSlashCount = x.split('').filter(item => item == '/').length
    if (findSlashCount > 5 ) {
        return [x.replaceAll('/', '-'), objResponse[6]]
    }
    
    return [x.replaceAll('/', '-'), objResponse[findSlashCount]]
}
console.log(bald('//-/---/-------/-/--'))
// Input will include a string with dashes and forward slashes
// Output will be the original string with '/' replaced with a '-' then a second parameter that will return on of five strings; check above
    assert.deepEqual(bald('/---------'), ['----------', 'Unicorn!']);
    assert.deepEqual(bald('/-----/-'), ['--------', 'Homer!']);
    assert.deepEqual(bald('--/--/---/-/---'), ['---------------', 'Careless!']); 
//create obj with string responses then split to array to get length of array then filter item get count with length then use conditionals to return string 
