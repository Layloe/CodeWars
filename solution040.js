// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

//Parameters: a triangle ofconsecutive odd numbers withn rows,where n starts at 1 input is the row number
//Results:sum of the numbers in the nth row n
//Examples:
//     assert.strictEqual(rowSumOddNumbers(1), 1);
//     assert.strictEqual(rowSumOddNumbers(42), 74088);
//Psudocode: mafs



function rowSumOddNumbers(n) {
    console.log(Math.pow(n,3))
	// return n*n*n
}

rowSumOddNumbers(42)