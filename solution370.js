const showArr = ['Vox Machina', 'Castlevainia', 'LearnWithLeon']
const nums = [42,69,12,21,32,22]

showArr.forEach( show => console.log(show))

const onlyEven = arr => arr.filter(num => num % 2 == 0 )
console.log(onlyEven(nums))

function onlyFirstAndSecond(arr) {
    const sortArr = arr.sort((a, b) => a - b)
    return sortArr[1] + sortArr[sortArr.length -2]
}
console.log(onlyFirstAndSecond(nums))