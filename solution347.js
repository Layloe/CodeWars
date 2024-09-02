//inputs can be string, number, or empty string

//display only last 4 chars
//display whole chars < 4 in length

//if input less than or equal to four, return input
//need to know the length of the section to mask, and print n "#"
//then
//need to capture last 4 chars to print, then concat


function maskify(cc){
    if(cc.length <= 4) {
      return cc
    }

    let maskSection = '#'.repeat(cc.length-4)
    let lastFour = cc.slice(-4)

    return maskSection + lastFour
  }