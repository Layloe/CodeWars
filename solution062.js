// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

//Parameters: Take in a string

//Return: A reverse() str

//Example:
    // assert.strictEqual(reverse('I am an expert at this'), 'this at expert an am I');
    // assert.strictEqual(reverse('This is so easy'), 'easy so is This');
    // assert.strictEqual(reverse('no one cares'), 'cares one no');
    // assert.strictEqual(reverse(''), '');
    // assert.strictEqual(reverse('CodeWars'), 'CodeWars');

//Psuedocode: Use split(' ').reverse().join(' ') methods
const assert = require("assert");


function reverse(string){
   

    return string.split(' ').reverse().join(' ')
  }

  console.log (reverse('I am an expert at this'))

    assert.strictEqual(reverse('I am an expert at this'), 'this at expert an am I');
    assert.strictEqual(reverse('This is so easy'), 'easy so is This');
    assert.strictEqual(reverse('no one cares'), 'cares one no');
    assert.strictEqual(reverse(''), '');
    assert.strictEqual(reverse('CodeWars'), 'CodeWars');

  