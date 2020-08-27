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
