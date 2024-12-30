// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "A
const assert = require('assert')
function uefaEuro2016(teams, scores){
        if (scores[0] > scores[1] ) {
            return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
        }
        if (scores[0] < scores[1] ) {
            return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
        }
        if (scores[0] == scores[1] ) {
            return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
        }
  }
  console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]))
  //input has two parameters one is going to be an array of 2 strings the other is going to be an array of 2 numbers
  //output is going to be a string that combines both params into a sentence
  assert.strictEqual(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]), "At match Germany - Ukraine, Germany won!");
  assert.strictEqual(uefaEuro2016(['Belgium', 'Italy'], [0, 2]), "At match Belgium - Italy, Italy won!");
  assert.strictEqual(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]), "At match Portugal - Iceland, teams played draw."); 
  //compare scores parameter index positions. Use conditionals 


//   It is easy to join two strings together like this string1 + string2.

// Another way to get the desired result would be with string1.concat(string2)

// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

// If one of the arguments is a number your code must coerce it into being a string.
function joinStrings(string1, string2){
    return `${string1} ${string2}`
 }
 console.log(joinStrings('string1', 'string2'))
 //input is going to have two parameters both strings
 //output will be the concatenation of both strings,+ , .concat() & .join() will not be allowed in this exercise.
     assert.strictEqual(joinStrings('string1', 'string2'), 'string1 string2');
     assert.strictEqual(joinStrings('testing', 'testing'), 'testing testing');
     assert.strictEqual(joinStrings(134, 234), '134 234');
 //use template literals 


//  Safen User Input Part I - htmlspecialchars
// You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

// Mission
// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;
// Good luck :D
function htmlspecialchars(formData) {
    let conversion = ''
    const obj = {
        '<' : '&lt;',
        '>' : '&gt;',
        '"' : '&quot;',
        '&' : '&amp;'
    }
    for (const curr of formData) {
        conversion += obj[curr] || curr
    }
    return conversion
  }
  console.log(htmlspecialchars("<h2>Hello World</h2>"))
  //input is going to be a string with special chars
  //output will be a string with special chars converted to other chars
  assert.strictEqual(
    htmlspecialchars("<h2>Hello World</h2>"),
    "&lt;h2&gt;Hello World&lt;/h2&gt;"
  );
  assert.strictEqual(
    htmlspecialchars("Hello, how would you & I fare?"),
    "Hello, how would you &amp; I fare?"
  );
  assert.strictEqual(
    htmlspecialchars('How was "The Matrix"?  Did you like it?'),
    'How was &quot;The Matrix&quot;?  Did you like it?'
  );
  assert.strictEqual(
    htmlspecialchars("<script>alert('Website Hacked!');</script>"),
    "&lt;script&gt;alert('Website Hacked!');&lt;/script&gt;"
  );
  //first lets create an obj and loop thru to see if true. Then swap out using obj. Practicing hash maps

  function testHash(data) {
    let strConverted = ''
    const obj = {  
        '<' : '&lt;',
        '>' : '&gt;',
        '"' : '&quot;',
        '&' : '&amp;'       
    } 

    for (const currentItemInLoop of data) {
        strConverted += obj[currentItemInLoop] || currentItemInLoop
    }
    return strConverted
  }
  console.log(testHash('<>Das boot<>'))


//   There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

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

function correctPolishLetters(string) {
    let englishStr = ''
    const obj = {
        'ą':'a',
        'ć':'c',
        'ę':'e',
        'ł':'l',
        'ń':'n',
        'ó':'o',
        'ś':'s',
        'ź':'z',
        'ż':'z',
    }
    for (const curr of string) {
        englishStr += obj[curr] || curr
    }
    return englishStr
}
console.log(correctPolishLetters("Jędrzej Błądziński"))
//input will be a string with polish letters
//output is a string wih the polish char replaced with english char
assert.strictEqual(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
assert.strictEqual(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
assert.strictEqual(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie")
// change given code to an obj then declare an empty var to hold str. Then for of loop to convert str

function recallHash(str) {
  let emptyStr = ''
  const obj = {
        'ą':'a',
        'ć':'c',
        'ę':'e',
        'ł':'l',
        'ń':'n',
        'ó':'o',
        'ś':'s',
        'ź':'z',
        'ż':'z',
  }
  for (const curr of str) {
    emptyStr += obj[curr] || curr
  }
  return emptyStr
}
console.log(recallHash("Maria Skłodowska-Curie"))