// Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits. He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?

// The Challenge
// Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

// Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.

function findScreenHeight(width, ratio) {
    const key = [{
        "4:3"  : "768",
        "16:9" : "720",
        "32:9" : "1080"
    }]
    const findRatio = key.find(item => item == Object(key))
    console.log(findRatio)
    return `${width}x${ratio}`
}
console.log(findScreenHeight(1024,"4:3"))
// Input has two parameters one a num the other a string of two nums separated by ':'  ie '4:3"
// Output is a string and is in the format of 'WIDTHxHEIGHT'
    // assert.strictEqual(findScreenHeight(1024,"4:3"), "1024x768");
    // assert.strictEqual(findScreenHeight(1280,"16:9"), "1280x720");
    // assert.strictEqual(findScreenHeight(3840,"32:9"), "3840x1080");
// Declare a variable that will hold a key of objects. Then use find and template literals to format string