// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//? Parameters: a string that is a URL

//? Return: the string URL but remove # and any chars after 

//? Example:
// assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
// assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
// assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')

//? Pseudocode: var split()
//? indexOf()
//? slice()

const assert = require('assert')

function removeUrlAnchor(url){
    const poundIt = url.split('').indexOf('#')
    const sliceIt = url.slice(0, poundIt) 
    if (url.includes('#') == false) {
        return url
    } else {

    return sliceIt
    }
}    
console.log(removeUrlAnchor('www.codewars.com#about'))

  assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
  assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
  assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')

//         ( •_• )
// 　　＿ノ ヽ ノ＼ __
// 　 /　`/ ⌒Ｙ⌒
// 　|　ﾉ⌒＼ ￣￣ヽ　 ノ
// 　ヽ＿＿＿＞､＿＿_／
// 　　　 ｜( 王 ﾉ〈
// 　　　 /ﾐ`ー―彡\