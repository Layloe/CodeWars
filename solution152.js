// Template Strings
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```

//*Parameter: 2 params both containing a str

//*Return: a str that includes both params but with "are" in the middle

//*Example: Test.assertEquals(TempleStrings("Animals","Good"), 'Animals are Good')

//*Psuedocode: Use templete literals to include both params into the str

var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`
}

console.log(TempleStrings("Animals","Good"))
