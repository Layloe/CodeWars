// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!
function fireFight(s){
  return s.split(' ').map(item => item == 'fire' ? item.replaceAll('fire', '~~') : item)
}
console.log(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"))
// input is going to be a string of random beat words and fire
// output will be the same string but with the word fire replaced by ~~
    // assert.strictEqual(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"), "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast");
    // assert.strictEqual(fireFight("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~");
    // assert.strictEqual(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"), "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain");
// split them map includes replace all fire with ~~