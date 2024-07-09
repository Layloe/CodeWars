// Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?

//? Parameters: none just call the func

//? Return: working func's

//? Example:
// Test.expect(stringify(getMax2()) == stringify(getMax1()));

//? Pseudocode: debug: get both functions working and returning the same obj

// const getMax1 = () =>  {const max = {name : 'Max Headroom'}; return max}
// const getMax2 = () =>  ({name : 'Max Headroom'})


function getMax1()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}
console.log(getMax1())

function getMax2()
{
  return {name: 'Max Headroom'}
}
console.log(getMax2())

// Test.expect(stringify(getMax2()) == stringify(getMax1()));