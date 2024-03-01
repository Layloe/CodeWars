// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

//? Prameters: two params one an arr of stings other arr on nums

//? Return: string of winner depending on outcome of nums. "At match Germany - Ukraine, Germany won!"

//? Example:
//   assert.strictEqual(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]), "At match Germany - Ukraine, Germany won!");
//   assert.strictEqual(uefaEuro2016(['Belgium', 'Italy'], [0, 2]), "At match Belgium - Italy, Italy won!");
//   assert.strictEqual(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]), "At match Portugal - Iceland, teams played draw.");

//? Psuedocode: first see who is winner from scores with comparison
//? use templete literals both params depending on winner

const assert = require('assert')

function uefaEuro2016(teams, scores){

    if(scores[0] > scores[1]){
        return   `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    }
    if(scores[1] > scores[0]){
        return   `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    }
    if(scores[0] == scores[1]){
        return `At match ${teams[0]} - ${teams[1]}, teams played draw.`           
    }

  }
  console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]))

  assert.strictEqual(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]), "At match Germany - Ukraine, Germany won!");
  assert.strictEqual(uefaEuro2016(['Belgium', 'Italy'], [0, 2]), "At match Belgium - Italy, Italy won!");
  assert.strictEqual(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]), "At match Portugal - Iceland, teams played draw.");