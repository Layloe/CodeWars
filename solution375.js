// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// const check = (a,x) => a.includes(x)
function check(a, x) {
    // for (let i = 0; i < a.length; i++) {
    //     if ( x == a[i]) {
    //         return true
    //     }
    //     }
    //     return false
    for (const curr of a) {
        if (x === a[curr]) {
           return true
        } else {
            return false
        }      
    }
    // return a.includes(x)
  }
  console.log(check(['t', 'e', 's', 't'], 't'))

// input is going to be an array of mixed values str num ect
// output is going to be an boolean depending if value is included in arr
//   assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
//   assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);
// I think looping through the arr or using the method includes or combination of both.  