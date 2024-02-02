// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//? Parameters: a str

//? Return:a new string with all vowels removed.

//? Example:
// assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
// assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
// assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")

//? Psuedocode: for loop through str
//?  if !incldes vowels !not
//? push to empty arr
  

function disemvowel(str) {
    const vowel = []
    const strSplit = str.split('')
    
    strSplit.forEach(item => {
        
    });
    return str.join()
  }