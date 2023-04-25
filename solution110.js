// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//Parameters: arr of strings 

//Return: three possible strings:'Fail!','Publish!', and'I smell a series!'

//Example:
// assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');

//Psuedocode: else if and methods includes filter length

// (cond ? a : b)




function well(x) {
    switch (x.filter(i => i === 'good').length) {
      case 0:
        return 'Fail!'
      case 1:
      case 2:
        return 'Publish!'
      default:
        return 'I smell a series!'
    }
}
    // let item = 'good'
  //  if (x.filter(value => value.length > 3)) {
  //       return 'Fail!'
  //  }else{
  //       return 'Publish!'
  //  }
         
//  } else {if (x.filter(value => !value.includes('good'))) {
//     return 'Fail!'
//  } else {
    
  } 


console.log(well(['good', 'bad', 'bad']))



// assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');