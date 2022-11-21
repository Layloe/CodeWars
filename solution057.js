// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

//Parameters: A sting

//Return: A string in which firstname is swapped with last name.


//Examples:
    // assert.strictEqual(nameShuffler('john McClane'),'McClane john');
    // assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
    // assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')

//Psuedocode: Use methods split(' ') then reverse() and finally join(' ')

const assert = require('assert')

function nameShuffler(str){
     
    return(str.split(' ').reverse().join(' '))
  
  }

  nameShuffler('John doe')
  //!  I need to understand why the assert worked for some of the names but threw an error for others. Wait I may have been console loggin instead of returning

    assert.strictEqual(nameShuffler('john McClane'),'McClane john');
    assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
    assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')





    // assert.strictEqual(nameShuffler('john McClane'),'McClane john');
    // assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
    // assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')