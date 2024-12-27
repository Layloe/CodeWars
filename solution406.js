// You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "how much do people normally tip for something like this?" The artist looks up. "It's always gonna be about tree fiddy."

// It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster almost tricked you!

// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.

// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty". Your function should return true if you're talking with The Loch Ness Moster, false otherwise.
const assert = require('assert')
function isLochNessMonster(s) {
    // if (s.includes("tree fiddy")) {return true}
    // if (s.includes("3.50")) {return true}
    // if (s.includes("three fifty")) {return true}   
        return s.includes("tree fiddy") || s.includes("3.50") || s.includes("three fifty")
  }
  console.log(isLochNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."))
  //input will be a string or sentence 
  //output is going to be a boolean
    // assert.strictEqual("Your girlscout cookies are ready to ship. Your total comes to tree fiddy", true);
    // assert.strictEqual("Howdy Pardner. Name's Pete Lexington. I reckon you're the kinda stiff who carries about tree fiddy?", true);
    // assert.strictEqual("I'm from Scottland. I moved here to be with my family sir. Please, $3.50 would go a long way to help me find them", true);
    // assert.strictEqual("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.", false);
    // assert.strictEqual("I will absolutely, positively, never give that darn Lock Ness Monster any of my three dollars and fifty cents", false);
    // assert.strictEqual("Did I ever tell you about my run with that paleolithic beast? He tried all sorts of ways to get at my three dolla and fitty cent? I told him 'this is MY 4 dolla!'. He just wouldn't listen.", false);
    // assert.strictEqual("Hello, I come from the year 3150 to bring you good news!", false);
    // assert.strictEqual("By 'tree fiddy' I mean 'three fifty'", true);
    // assert.strictEqual("I will be at the office by 3:50 or maybe a bit earlier, but definitely not before 3, to discuss with 50 clients", false);
    // assert.strictEqual("tree fifty", false);
    // assert.strictEqual("three fiddy", false);
    // assert.strictEqual("", false);
  // use conditionals to look for specific strings with the method includes()