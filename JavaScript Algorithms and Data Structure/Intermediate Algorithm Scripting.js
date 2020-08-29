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
