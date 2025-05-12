// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but with 2 asterisks.

// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearance in the original string.

// More examples:

// "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"

function getStrings(city){
    let results = {}
  //    const toArray = city.toLowerCase().split('')
  // for (currItem of toArray) {
  //     if (!results[currItem]) {
  //       results[currItem] = ''
  //     }
  //     results[currItem] += '*'
  // }

  // return results
    const citySplit = city.toLowerCase().split('')
    for (item of citySplit) {
      if (!results[item]) {
        results[item] = ''
      }
        results[item] += '*'
    }
    return results
  }
  console.log(getStrings("Chicago"))
  // Input will be a string/name of a city.
  // Output is a string of objects joined together.
    // assert.equal(getStrings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*");
    // assert.equal(getStrings("Bangkok"), "b:*,a:*,n:*,g:*,k:**,o:*");
    // assert.equal(getStrings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*");
  // Create a mutable variable that will hold results then variable to split the city. Then use a for of loop with if else to check if there is a duplicate char then push results and finally join. 
  


















 