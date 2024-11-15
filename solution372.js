

//Create and array of tv shows. Loop through and print each show to the console

const showArr = ['Vox Machina', 'Castlevania', 'LearnWithLeon', 'MayanWolfe']
showArr.forEach(item => console.log(item))
  

//Create and array of numbers
const nums = [42,69,12,21,32,22]
//Return a new array of numbers that includes every even number from the previous Arrays
const evenNums = (arr) => arr.filter(nums =>  nums % 2 === 0 )

console.log(evenNums(nums))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function secondLowestAndSecondHighest (arr) {
    const sortNum = arr.sort((a,b)=> a - b)
    console.log(sortNum)
    return sortNum[1] + sortNum[sortNum.length -2]
}
console.log(secondLowestAndSecondHighest(nums))