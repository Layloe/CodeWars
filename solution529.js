// Here's a little cheatsheet that will help you write your function to replace the so-last-year letters a-e-i-o-u-and-sometimes-y with the following totally rocking letters:

// A = Ä = \u00c4     E = Ë = \u00cb     I = Ï = \u00cf
// O = Ö = \u00d6     U = Ü = \u00dc     Y = Ÿ = \u0178
// a = ä = \u00e4     e = ë = \u00eb     i = ï = \u00ef
// o = ö = \u00f6     u = ü = \u00fc     y = ÿ = \u00ff

function heavyMetalUmlauts(boringText) {
    const dictionary = {
    'A': 'Ä',
    'E': 'Ë',
    'I': 'Ï',
    'O': 'Ö',
    'U': 'Ü',
    'Y': 'Ÿ',
    'a': 'ä',
    'e': 'ë',
    'i': 'ï',
    'o': 'ö',
    'u': 'ü',
    'y': 'ÿ'
}
    return boringText.split('').map(item => `AEIOUYaeiouy`.includes(item) ? dictionary[item] : item).join('')
}
console.log(heavyMetalUmlauts("Announcing the Macbook Air Guitar"))
// Input is a string.
//Output is a string with all vowels replaced with custom letters.
    // assert.strictEqual(heavyMetalUmlauts("Announcing the Macbook Air Guitar"), "Ännöüncïng thë Mäcböök Äïr Güïtär");
    // assert.strictEqual(heavyMetalUmlauts("Facebook introduces new heavy metal reaction buttons"), "Fäcëböök ïntrödücës nëw hëävÿ mëtäl rëäctïön büttöns");
    // assert.strictEqual(heavyMetalUmlauts("Strong sales of Google's VR Metalheadsets send tech stock prices soaring"), "Ströng sälës öf Gööglë's VR Mëtälhëädsëts sënd tëch stöck prïcës söärïng");
    // assert.strictEqual(heavyMetalUmlauts("Vegan Black Metal Chef hits the big time on Amazon TV"), "Vëgän Bläck Mëtäl Chëf hïts thë bïg tïmë ön Ämäzön TV");
// Make a dictionary of all vowels. Split map with if else of vowels and replace all.
