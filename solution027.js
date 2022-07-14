//Parameters: A single array with mutiple types of elements including numbers, strings, booleans
//Return: A single array with the same elements BUT the zeros are moved to the en of the array. The other elemetns should remain in the same locastion in the array.
//Examples: 


function moveZeros(array){
    let catchall = []
    let zeros = []
    for (let i = 0; i<array.length; i++){
        array[i] === 0 ? zeros.push(array[i]) : catchall.push(array[i])
    }
    return [...catchall, ...zeros]
}
moveZeros([1,2,0,1,0,1,0,3,0,1])