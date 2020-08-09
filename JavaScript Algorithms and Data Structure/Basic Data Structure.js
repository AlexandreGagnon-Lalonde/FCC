// Use an Array to Store a Collection of Data
  let yourArray = [1, "2", true, true, true]; // Change this line

// Access an Array's Contents Using Bracket Notation
  let myArray = ["a", "b", "c", "d"];
  // Only change code below this line
  myArray[1] = 'besides b'
  // Only change code above this line
  console.log(myArray);

// Add Items to an Array with push() and unshift()
  function mixedNumbers(arr) {
    // Only change code below this line
    arr.push(7, 'VIII', 9);
    arr.unshift('I', 2, 'three')
    // Only change code above this line
    return arr;
  }

  console.log(mixedNumbers(['IV', 5, 'six']));

// Remove Items from an Array with pop() and shift()
  function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }

  console.log(popShift(['challenge', 'is', 'not', 'complete']));

// Remove Items Using splice()