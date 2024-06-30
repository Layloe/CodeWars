// Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

//? Parameters:  a number

//? Return: converted temp and one of two strings 

//? Example:
// assert.strictEqual(weatherInfo(50), '10 is above freezing temperature')
// assert.strictEqual(weatherInfo(23),  '-5 is freezing temperature')

//? Pseudocode: debug 
// fix function structure and grammar 
// fix conditionals

const assert = require('assert')


function weatherInfo (temp) {
    var c = convertToCelsius(temp)
    if (c <= -5)
      return c + " is freezing temperature"
    else
      return c + " is above freezing temperature"
  }
  console.log(weatherInfo(50))

  function convertToCelsius (temperature) {
    var celsius = (temperature - 32) * (5/9)
    return celsius
  }
//   console.log(convertToCelsius(50))

  assert.strictEqual(weatherInfo(50), '10 is above freezing temperature')
  assert.strictEqual(weatherInfo(23),  '-5 is freezing temperature')
