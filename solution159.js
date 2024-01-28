// Safen User Input Part I - htmlspecialchars
// You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

// Mission
// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;
// Good luck :D
//? Parameters: a str

//? Example:
// assert.strictEqual(
//     htmlspecialchars("<h2>Hello World</h2>"),
//     "&lt;h2&gt;Hello World&lt;/h2&gt;"
//   );
//   assert.strictEqual(
//     htmlspecialchars("Hello, how would you & I fare?"),
//     "Hello, how would you &amp; I fare?"
//   );
//   assert.strictEqual(
//     htmlspecialchars('How was "The Matrix"?  Did you like it?'),
//     'How was &quot;The Matrix&quot;?  Did you like it?'
//   );
//   assert.strictEqual(
//     htmlspecialchars("<script>alert('Website Hacked!');</script>"),
//     "&lt;script&gt;alert('Website Hacked!');&lt;/script&gt;"
//   );

//? Return: a str tha converts four char's to diffrent str output 

//? Psuedocode: loop through str to finds special char then use conditionals or templete literals to input a diffrent str
//! < --> &lt;
//! > --> &gt;
//! " --> &quot;
//! & --> &amp;

const assert = require('assert')

function htmlspecialchars(formData) {
    // const convertChar = ['&lt;', '&gt;', '&qout;', '&amp']
    // const char = ['<', '>', '"', '&']
    let arr = formData.split('')
    
    arr.map((char, index, arrMatey ) => {
        char === '<' ? arrMatey[index] = '&lt;' : 'aww beans'
        char === '>' ? arrMatey[index] = '&gt;' : 'aww beans'
        char === '"' ? arrMatey[index] = '&quot;' : 'aww beans'
        char === '&' ? arrMatey[index] = '&amp;' : 'aww beans'
    })

    return arr.join('')
    
  }

  console.log(htmlspecialchars("<h2>Hello World</h2>"))

  assert.strictEqual(
    htmlspecialchars("<h2>Hello World</h2>"),
    "&lt;h2&gt;Hello World&lt;/h2&gt;"
  );
  assert.strictEqual(
    htmlspecialchars("Hello, how would you & I fare?"),
    "Hello, how would you &amp; I fare?"
  );
  assert.strictEqual(
    htmlspecialchars('How was "The Matrix"?  Did you like it?'),
    'How was &quot;The Matrix&quot;?  Did you like it?'
  );
  assert.strictEqual(
    htmlspecialchars("<script>alert('Website Hacked!');</script>"),
    "&lt;script&gt;alert('Website Hacked!');&lt;/script&gt;"
  );