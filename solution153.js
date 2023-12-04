// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

//Parameters: 2 params an arr of str and an arr of nums

//Return: return a str stating who won

//Example:
// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

//Psuedocode: comapre == return `str` 

function uefaEuro2016(teams, scores){
    const [team1, team2] = teams
    const [scores1, scores2] = scores
    const winner = scores1 > scores2 ? team1 : team2

    return scores1 === scores2 ? `At match ${team1} - ${team2}, teams played draw.` : `At match ${team1} - ${team2}, ${winner} won!`

  }
  console.log(uefaEuro2016(['Germany', 'Ukraine'],[2, 0]))