// You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "how much do people normally tip for something like this?" The artist looks up. "It's always gonna be about tree fiddy."

// It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster almost tricked you!

// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.

// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty". Your function should return true if you're talking with The Loch Ness Moster, false otherwise.

//? Prameters: a string

//? Return: a string depending on if substring is found 

//? Example:
// console.log("Your girlscout cookies are ready to ship. Your total comes to tree fiddy");
// Test.expect(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
// console.log("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.");
// Test.expect(!isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."));

//? Psuedocode: condtionals
//? includes('tree fiddy') || includes('3.50') || includes('three fifty')
//? boolean

const assert = require('assert')

// const isLockNessMonster = s => s.includes('tree fiddy') || s.includes('3.50') || s.includes('three fifty') ? true : false

function isLockNessMonster(s) {
    if (s.includes('tree fiddy') || s.includes('3.50') || s.includes('three fifty') ) {
        return true
    }else {                          
        return false
    }
  }
console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"))

assert.strictEqual(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"), true)
assert.strictEqual(isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."), false)

//   console.log("Your girlscout cookies are ready to ship. Your total comes to tree fiddy");
//   Test.expect(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
//   console.log("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.");
//   Test.expect(!isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."));
//         ( •_• )
// 　　＿ノ ヽ ノ＼ __
// 　 /　`/ ⌒Ｙ⌒
// 　|　ﾉ⌒＼ ￣￣ヽ　 ノ
// 　ヽ＿＿＿＞､＿＿_／
// 　　　 ｜( 王 ﾉ〈
// 　　　 /ﾐ`ー―彡\