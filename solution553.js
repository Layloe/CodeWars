// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"
const assert = require('assert')

function nerdify(txt){

    return txt
    .replaceAll('a', '4')
    .replaceAll('A', '4')
    .replaceAll('e', '3')
    .replaceAll('E', '3')
    .replaceAll('l', '1')
}
console.log(nerdify("Los Angeles"))
// Input is a string.
// Output is a string with chars replaced. See above.
    assert.strictEqual(nerdify("Fund4m3nt41s"),"Fund4m3nt41s");
    assert.strictEqual(nerdify("Seven"),"S3v3n");
    assert.strictEqual(nerdify("Los Angeles"),"Los 4ng313s");
    assert.strictEqual(nerdify("Seoijselawuue"),"S3oijs314wuu3");
// Use method replaceAll with dot notation.