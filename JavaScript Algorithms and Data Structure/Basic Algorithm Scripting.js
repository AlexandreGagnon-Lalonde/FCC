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
