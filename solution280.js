// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//? Parameters: a string

//? Return: the string with the vowels or chars 'aeiou' removed 

//? Example:
// assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
// assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
// assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")

//? Pseudocode: declare a var
//? split
//? filter 
//? includes
//? join

const assert = require('assert')

// const disemvowel = str => str.split('').filter(item => !'aeiouAEIOU'.includes(item)).join('')

function disemvowel(str) {
    const myNameIsBoxxy = str.split('').filter(item => !'aeiouAEIOU'.includes(item)).join('')
    return myNameIsBoxxy
  }
console.log(disemvowel("This website is for losers LOL!"))

  assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
  assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
  assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")

//         ( •_• )
// 　　＿ノ ヽ ノ＼ __
// 　 /　`/ ⌒Ｙ⌒
// 　|　ﾉ⌒＼ ￣￣ヽ　 ノ
// 　ヽ＿＿＿＞､＿＿_／
// 　　　 ｜( 王 ﾉ〈
// 　　　 /ﾐ`ー―彡\