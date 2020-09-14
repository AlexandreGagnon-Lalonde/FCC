// Sum All Numbers in a Range
  function sumAll(arr) {
    let sum = 0;
    if (arr[0] > arr[1]) {
      for (let i = arr[1]; i <= arr[0]; i++) {
        sum += i;
      }
    } else {
      for (let i = arr[0]; i <= arr[1]; i++) {
        sum += i;
      }
    }
    return sum;
  }

  sumAll([1, 4]);

// Diff Two Arrays
  function diffArray(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
  }

  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Seek and Destroy
  function destroyer(arr) {
    let args = [...arguments];
    let result = [].concat(arr);
    args.shift();
    for (let i = 0; i < args.length; i++) {
      result = result.filter(x => x !== args[i])
    }
    return result;
  }

  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Wherefore art thou
  function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    let sourceKeys = Object.keys(source)
    for (let i = 0; i < collection.length; i++) {
      let checker = true;
      for (let j = 0; j < sourceKeys.length; j++) {
        if (collection[i][sourceKeys[j]] !== source[sourceKeys[j]]) {
          checker = false;
        }
      }
      if (checker) {
        arr.push(collection[i])
      }
    }
    // Only change code above this line
    return arr;
  }

  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// Spinal Tap Case
  function spinalCase(str) {
    return str
      .split(/(?=[A-Z])|(\W)|(\s)/g)
      .filter((x) => (x ? x.length > 1 : null))
      .map((word) => {
        if (word.includes("_")) {
          return word.replace("_", "").toLowerCase();
        } else {
          return word.toLowerCase();
        }
      })
      .join("-");
  }

  spinalCase("This Is Spinal Tap");

// Pig Latin
  function translatePigLatin(str) {
    let wordArr = str.split("");
    if (
      wordArr[0] === "a" ||
      wordArr[0] === "e" ||
      wordArr[0] === "i" ||
      wordArr[0] === "o" ||
      wordArr[0] === "u"
    ) {
      return str + "way";
    } else {
      return (
        str.slice(str.match(/[^aeiou]+/)[0].length) +
        str.match(/[^aeiou]+/)[0] +
        "ay"
      );
    }
  }

  translatePigLatin("consonant");

// Search and Replace
  function myReplace(str, before, after) {
    console.log(before.charAt(0) === before.charAt(0).toUpperCase())
    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
      after = after.charAt(0).toUpperCase() + after.substring(1)
    } else {
      after = after.charAt(0).toLowerCase() + after.substring(1)
    }
    return str.replace(before, after);
  }

  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// DNA Pairing
  function pairElement(str) {
    return str.split("").map((letter) => {
      switch (letter) {
        case "A":
          return [letter, "T"];
        case "T":
          return [letter, "A"];
        case "C":
          return [letter, "G"];
        case "G":
          return [letter, "C"];
      }
    });
  }

  pairElement("GCG");

// Missing letters
  function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
      if (str.charCodeAt(i + 1) - str.charCodeAt(i) !== 1) {
        return String.fromCharCode(str.charCodeAt(i) + 1);
      }
    }
    return undefined;
  }

  fearNotLetter("abce");

// Sorted Union
  function uniteUnique(arr) {
    let args = [...arguments];
    let answer = [];
    args.forEach((array) => {
      array.forEach((number) => {
        if (!answer.includes(number)) {
          answer.push(number);
        }
      });
    });
    return answer.sort((a, b) => a + b);
  }

  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Convert HTML Entities
  function convertHTML(str) {
    return str
      .split("")
      .map((symbol) => {
        switch (symbol) {
          case "&": {
            return "&amp;";
          }
          case "<": {
            return "&lt;";
          }
          case ">": {
            return "&gt;";
          }
          case '"': {
            return "&quot;";
          }
          case "'": {
            return "&apos;";
          }
          default: {
            return symbol;
          }
        }
      })
      .join("");
  }

  convertHTML("Dolce & Gabbana");

// Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  if (num === 1) {
    return 1;
  }
  let fibArray = [1, 1];
  for (let i = 0; i < num - 2; i++) {
    fibArray.push(fibArray[i] + fibArray[i + 1]);
  }
  return fibArray
    .filter((number) => number <= num && number % 2 === 1)
    .reduce((a, b) => a + b);
}

sumFibs(4);

// Sum All Primes
  function sumPrimes(num) {
    let primeArray = [];

    for (let i = 2; i <= num; i++) {
      let checker = true;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0 && j !== 1 && j !== i) {
          checker = false;
        }
      }
      if (checker) {
        primeArray.push(i);
      }
    }
    console.log(primeArray);
    return primeArray.reduce((a, b) => a + b);
  }

  sumPrimes(10);

// Smallest Common Multiple
  function smallestCommons(arr) {
    let checker = false;
    let i = 1;
    while (!checker) {
      if (arr[0] > arr[1]) {
        checker = true;
        for (let j = arr[1]; j <= arr[0]; j++) {
          if (i % j !== 0) {
            checker = false;
          }
        }
      } else {
        checker = true;
        for (let j = arr[0]; j <= arr[1]; j++) {
          if (i % j !== 0) {
            checker = false;
          }
        }
      }
      i++;
    }
    console.log(i);
    return i - 1;
  }

  smallestCommons([1, 5]);

// Drop it
  function dropElements(arr, func) {
    if (arr.find(func)) {
      return arr.slice(arr.indexOf(arr.find(func)));
    } else {
      return [];
    }
  }

  dropElements([1, 2, 3], function (n) {
    return n < 3;
  });

// Steamroller
  function steamrollArray(arr) {
    return arr
      .join("")
      .replace(/,/, "")
      .replace(/\[object Object\]/, "{}")
      .split("")
      .filter((element) => element !== "}")
      .map((element) => {
        console.log(element);
        if (element === "{") {
          return {};
        } else if (element === "}") {
          return;
        } else if (parseInt(element) >= 0 && parseInt(element) <= 9) {
          return parseInt(element);
        } else {
          return element;
        }
      });
  }

  steamrollArray([1, [2], [3, [[4]]]]);

// Binary Agents
  function binaryAgent(str) {
    return str
      .split(" ")
      .map((binary) => String.fromCharCode(parseInt(binary, 2)))
      .join("");
  }

  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  );

// Everything Be True
  function truthCheck(collection, pre) {
    return collection.every((obj) => obj[pre]);
  }

  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" },
    ],
    "sex"
  );

// Arguments optional
  function addTogether() {
    let args = Array.from(arguments);
    console.log(args);
    return args.some((arg) => typeof arg !== "number")
      ? undefined
      : args.length > 1
      ? args[0] + args[1]
      : (n) => (typeof n !== "number" ? undefined : n + args[0]);
  }

  addTogether(2, 3);

// Make a Person
  var Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function () {
      return this.fullName
        ? this.fullName
        : firstAndLast.split(" ")[0] + " " + firstAndLast.split(" ")[1];
    };
    this.getFirstName = function () {
      return this.firstName ? this.firstName : firstAndLast.split(" ")[0];
    };
    this.getLastName = function () {
      return this.lastName ? this.lastName : firstAndLast.split(" ")[1];
    };
    this.setFirstName = function (first) {
      this.firstName = first;
      this.lastName = this.lastName ? this.lastName : firstAndLast.split(" ")[1];
      this.fullName = this.firstName + " " + this.lastName;
    };
    this.setLastName = function (last) {
      this.lastName = last;
      this.firstName = this.firstName
        ? this.firstName
        : firstAndLast.split(" ")[0];

      this.fullName = this.firstName + " " + this.lastName;
    };
    this.setFullName = function (firstAndLast) {
      this.firstName = firstAndLast.split(" ")[0];
      this.lastName = firstAndLast.split(" ")[1];
      this.fullName = this.firstName + " " + this.lastName;
    };
    return firstAndLast;
  };

  var bob = new Person("Bob Ross");
  bob.getFullName();

// Map the Debris
  function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr.map((obj) => {
      var orbitsLengthPower3 = Math.pow(obj.avgAlt + earthRadius, 3);
      var rightHand = Math.pow(orbitsLengthPower3 / GM, 0.5);
      var orbitalPer = Math.round(2 * Math.PI * rightHand);
      obj.orbitalPeriod = orbitalPer;
      delete obj.avgAlt;
      return obj;
    });
  }

  orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
