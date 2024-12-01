// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

function uefaEuro2016(teams, scores){
    // const findWinSort = scores.map((item, index) => item )
    if (scores[0] > scores[1]) {
      return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    }
    if (scores[0] < scores[1]) {
      return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    }
    if (scores[0] == scores[1]) {
      return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    }

  }
  console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]))

//input will have two parameters one param is going to be an arr with two strings, next param will be an arr of two nums
//output will be a string using templete literals and inserting team that won
// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// compare the scores arr using conditionals to return one of 3 strings. Use index to separate teams.