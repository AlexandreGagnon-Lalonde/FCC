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
  function confirmEnding(str, target) {
    if (target === str.slice(str.length - target.length, str.length)) {
      return true
    } else {
      return false
    }

  }

  confirmEnding("Bastian", "n");

// Repeat a String Repeat a String
  function repeatStringNumTimes(str, num) {
    let repStr = '';
    if (num < 0) {
      return ''
    } else {
      for (let i = 0; i < num; i++) {
        repStr += str;
      }
      return repStr
    }
  }

  repeatStringNumTimes("abc", 3);

// Truncate a String
  function truncateString(str, num) {
    if (num >= str.length) {
      return str
    } else {
      return str.slice(0,num) + '...';
    }
  }

  truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Finders Keepers
  function findElement(arr, func) {
    return arr.find(func);
  }

  findElement([1, 2, 3, 4], num => num % 2 === 0);

// Boo who
  function booWho(bool) {
    return bool === true || bool === false ? true : false
  }

  booWho(null);

// Title Case a Sentence
  function titleCase(str) {
    return str.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(' ');
  }

  titleCase("I'm a little tea pot");

// Slice and Splice