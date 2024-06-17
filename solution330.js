// We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new JavaScript Object or Python Dict setting the 'value' key on the new Object or Dict to the passed-in value.

const { assert } = require("console");

// So, for example, if we execute the following code:

// wrapper_obj = wrap("my_wrapped_string"); 
//  # wrapper_obj should be  {"value":"my_wrapped_string"}
// We would then expect the following statement to be true:

// wrapper_obj["value"] == "my_wrapped_string"
// Unfortunately, the code is not working as designed. Please fix the code so that it behaves as specified.

//? Parameters: multiple data types

//? Return: obj with random value

//? Example:
//   Test.assertEquals(res.value , "MyTest")

//? Pseudocode: debug: create a var that inserts he value in key value pairs

const assert = require('assert')

// const wrap = value => ({value})

function wrap(value) {
    const randomValue = value
    return {
      value : randomValue
    };
  }
  console.log(wrap("MyTest"))

  assert.assertEquals(typeof res , 'object',"Doesn't return an object")
  assert.assertEquals(res.value , "MyTest")
  assert.assertEquals(wrap(343).value , 343)
  assert.assertEquals(wrap(obj).value , obj)
//         ( •_• )
// 　　＿ノ ヽ ノ＼ __
// 　 /　`/ ⌒Ｙ⌒
// 　|　ﾉ⌒＼ ￣￣ヽ　 ノ
// 　ヽ＿＿＿＞､＿＿_／
// 　　　 ｜( 王 ﾉ〈
// 　　　 /ﾐ`ー―彡\