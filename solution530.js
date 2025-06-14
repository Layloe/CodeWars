// Mr. E Ven only likes even length words. Please create a translator so that he doesn't have to hear those pesky odd length words. For some reason he also hates punctuation, he likes his sentences to flow.

// Your translator should take in a string and output it with all odd length words having an extra letter (the last letter in the word). It should also remove all punctuation (.,?!) as well as any underscores (_).

// "How did we end up here? We go?" translated becomes-> "Howw didd we endd up here We go"
const assert = require('assert')

function evenator(str) {
    const cleanStr = str.split('').filter(item => !".,?!_".includes(item)).join('')
    const isEven = cleanStr.split(' ').map(item => item.length % 2 === 0 ? item : item + item.slice(-1)).join(' ')
    
    return isEven
}
console.log(evenator('evenn'))
// Input is a string of words and punctuation.
// Output is a string that contains the original argument with all odd length words having an extra letter. It will also remove all punctuation.
    // assert.assertEquals(evenator('f'),'ff','');
    // assert.assertEquals(evenator('I got a hole in 1!'),'II gott aa hole in 11','');
    // assert.assertEquals(evenator('evenn'),'evennn','')
    // assert.assertEquals(evenator('even odd!'),'even oddd','');
    // assert.assertEquals(evenator('eve odd.'),'evee oddd','');
// Create a var that will split and filter to remove all punctuation ".,?!_". Then take that var and split with white space and map while using if else %2 == 0 to concat extra letter