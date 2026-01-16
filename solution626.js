// Can Santa save Christmas?
// Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

// But he has only 24 hours left. Can he do it?

// Your Task:
// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .
function determineTime (durations) {
//   const getSum = durations.map(time => time.split(':').join('')).reduce((acc, curr) => parseInt(curr) + acc,  0) 
  

//   return getSum 

   let sec = 0;
   let str = [];
   for (let i = 0; i < durations.length; i++) {
     str = durations[i].split(":");
     sec += +str[0] * 3600 + +str [1] * 60 + +str[2];
    }
    return sec/3600 <=24 ? true : false;
}
console.log(determineTime(["00:30:00", "02:30:00", "00:15:00"]))
// Input is an array if time durations in hours/minutes/seconds.
// Output is a boolean if time is met.
  // doTest(["00:30:00", "02:30:00", "00:15:00"], true);
	// doTest([], true);
	// doTest(["04:30:00", "02:00:00", "01:30:00", "16:00:00"], true);
	// doTest(["12:00:00", "12:00:00"], true);
	// doTest(["12:00:00", "12:00:01"], false);
	// doTest(["06:00:00","12:00:00","06:30:00"], false);
// Going to give reduce a try. Make a variable that will split ':' the array then join and finally reduce the array then if else if greater that 24.//! return to turning time into seconds