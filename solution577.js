// Your computer has forgotten how to speak ASCII! (or Unicode, whatever) It can only communicate in binary, and it has something important to tell you. Write a function which will receive a long string of binary code and convert it to a string. Remember, in Python binary output starts with '0b'.

// As an example: binary_to_string('0b10000110b11000010b1110100') == 'Cat'

// Input may consist of upper and lower case letters and numbers, in binary form of course, as well as special symbols. The input to your function will always be one string of binary.

function binaryToString(binary) {
    const parseStr = binary.split('0b').filter(Boolean)
    const decode = parseStr.map(item => {
        const binaryNum = parseInt(parseStr)

        return String.fromCharCode(item)
    })
    
    return decode
}
console.log(binaryToString('0b10000110b11000010b1110100'))

// Input is a string of binary.
// Output is a string of letters or words.
        // assert.strictEqual(binaryToString('0b10000110b11000010b1110100'), 'Cat')
        // assert.strictEqual(binaryToString(
        //     '0b10010000b11001010b11011000b11011000b11011110b1000000b10101110b11011110b11100100b11011000b11001000b100001'
        // ), 'Hello World!')
        // assert.strictEqual(binaryToString(
        //     '0b10100110b11001010b11000110b11100100b11001010b11101000b1000000b11011010b11001010b11100110b11100110b11000010b11001110b11001010b1000000b110001'
        // ), 'Secret message 1')
// Use method String.fromCharCode() withmap