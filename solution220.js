// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

//? Prameters: A string with mixed polish letters

//? Return: a string that replaces polish letters to english alphabet

//? Example:
// Test.assertEquals(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
// Test.assertEquals(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
// Test.assertEquals(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");

//? Psuedocode: chained replaceAll() 

const assert = require('assert')

// const correctPolishLetters = string => string.replaceAll...

function correctPolishLetters (string) {
    return string
    .replaceAll('ą','a')
    .replaceAll('ć','c')
    .replaceAll('ę','e')
    .replaceAll('ł','l')
    .replaceAll('ń','n')
    .replaceAll('ó ','o')
    .replaceAll('ś','s')
    .replaceAll('ź','z')
    .replaceAll('ż','z')

  }
  console.log(correctPolishLetters("Jędrzej Błądziński"))

  assert.strictEqual(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
  assert.strictEqual(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
  assert.strictEqual(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");

//         ( •_• )
// 　　＿ノ ヽ ノ＼ __
// 　 /　`/ ⌒Ｙ⌒
// 　|　ﾉ⌒＼ ￣￣ヽ　 ノ
// 　ヽ＿＿＿＞､＿＿_／
// 　　　 ｜( 王 ﾉ〈
// 　　　 /ﾐ`ー―彡\