const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // Only change code below this line
  const resultDisplayArray = result.failure.map(element => {
    return `<li class="text-warning">${element}</li>`
  });
  // Only change code above this line

  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);