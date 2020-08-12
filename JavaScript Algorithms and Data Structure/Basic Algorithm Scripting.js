// Convert Celsius to Fahrenheit
  function convertToF(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
  }

  convertToF(30);

// Reverse a String
  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  reverseString("hello");

// Factorialize a Number
  function factorialize(num) {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
      sum *= i
    }
    return sum;
  }

  factorialize(5);

// Find the Longest Word in a String
  function findLongestWordLength(str) {
    let answer = 0;
    str.split(' ').forEach(word => {
      if (word.length >= answer) {
        answer = word.length
      }
    });
    return answer;
  }

  findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return Largest Numbers in Arrays
  function largestOfFour(arr) {
    let newArr = [];
    arr.forEach(secondArr => {
      newArr.push(Math.max(...secondArr))
    })
    return newArr
  }

  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Confirm the Ending
