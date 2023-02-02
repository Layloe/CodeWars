const assert = require("assert");

const testData = {
  name: "tester",
  age: 42,
  species: "alien",
  hobby: "basketball",
};
 
console.log(testData)
// finish the assertions so that they pass!
// hint: change "property" to the property you want to access on the object
assert.strictEqual(testData.name, "tester");
assert.strictEqual(testData.age, 42);
assert.strictEqual(testData.species, "alien");
assert.strictEqual(testData.hobby, "basketball");