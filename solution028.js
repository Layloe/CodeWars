//Parameters - an integer that is non-negitve indicating a count of seconds, which are the basicinit on our clock.
//Returns - a clock value containing hours, minutes, seconds, with the specific forma of HH:MM:SS, with calues 9 and below haveing a leading zero.
//Examples
// strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');
//     strictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');
//     strictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');
//     strictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');
//     strictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
//     strictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
//     strictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');
//     strictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
//     strictEqual(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
//     strictEqual(humanReadable(359999), '99:59:59', 'humanReadable(359999)'


//Take n integer and dvde by 60 the appropriate amount of times and assing the result to hours, minutes, and seconds. Pad leading zeros where needed,and print hours,minutes, seconds witha colon between them.




function humanReadable (seconds) {
    let hours = Math.floor(seconds/3600)
    seconds = seconds - hours*3600
    hours = hours.toString().padStart(2,'0') 
    let minutes = Math.floor(seconds/60)
    seconds = (seconds-minutes*60).toString().padStart(2,'0')
    minutes = minutes.toString().padStart(2,'0')
   return `${hours} + ${minutes} + ${seconds}`
     

  }
  humanReadable(3600)