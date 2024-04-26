// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive

//? Prameters: an array of strings

//? Return: a array sorted asc

//? Example:
//   assert.deepEqual(sorter(['Algebra', 'history', 'Geometry', 'english']),
//   ['Algebra', 'english', 'Geometry', 'history']);

//? Psuedocode: declare var
//? sort()
//? work on edge cases

const assert = require('assert')

function sorter(textbooks) {
  const schoolBooks = textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1)  

    return schoolBooks
  }
  console.log(sorter(['Algebra', 'history', 'Geometry', 'english']))


  assert.deepEqual(sorter(['Algebra', 'History', 'Geometry', 'English']),
  ['Algebra', 'English', 'Geometry', 'History']);

  assert.deepEqual(sorter(['Algebra', 'history', 'Geometry', 'english']),
  ['Algebra', 'english', 'Geometry', 'history']);

  assert.deepEqual(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']),
  ['$istory', '**english', 'Alg#bra', 'Geom^try']);
