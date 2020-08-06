// Use the Spread Operator to Evaluate Arrays In-PlacePassed
  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  let arr2;

  arr2 = [...arr1];  // Change this line

  console.log(arr2);

// Complete a Promise with resolve and reject
  const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve('We got the data')
    } else {  
      reject('Data not received')
    }
  });

// Create a JavaScript Promise
  const makeServerRequest = new Promise((resolve, reject) => {

  })

// Create a Module Script
  {/* <html>
    <body>
      <!-- Only change code below this line -->
      <script type="module" src="index.js"></script>
      <!-- Only change code above this line -->
    </body>
  </html> */}

// Create an Export Fallback with export default
  export default function subtract(x, y) {
    return x - y;
  }

// Create Strings using Template Literals
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

// Handle a Fulfilled Promise with then
  const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });

  makeServerRequest.then(result => {
    console.log(result)
  })

// Handle a Rejected Promise with catch
  const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });

  makeServerRequest.then(result => {
    console.log(result);
  });

  makeServerRequest.catch(error => {
    console.log(error)
  });

// Import a Default Export
  import subtract from './math_functions.js';  

  // Only change code above this line

  subtract(7,4);

// Reuse JavaScript Code Using import
  import { uppercaseString, lowercaseString } from './string_functions.js';
  // Only change code above this line

  uppercaseString("hello");
  lowercaseString("WORLD!");

// Use ASTERISK to Import Everything from a File
  import * as stringFunctions from './string_functions.js';

  // Only change code above this line

  stringFunctions.uppercaseString("hello");
  stringFunctions.lowercaseString("WORLD!");

// Use class Syntax to Define a Constructor Function
  // Only change code below this line
  class Vegetable {
    constructor(name) {
      this.name = 'carrot';
    }
  }
  // Only change code above this line

  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'

// Use Destructuring Assignment to Assign Variables from Arrays
  let a = 8, b = 6;
  // Only change code below this line

  [a, b] = [b, a];

// Use Destructuring Assignment to Assign Variables from Nested Objects
  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };

  // Only change code below this line

  // Before
  const lowToday = LOCAL_FORECAST.today.low;
  const highToday = LOCAL_FORECAST.today.high;
  //After
  const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;

  // Only change code above this line

// Use Destructuring Assignment to Assign Variables from Objects
  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

  // Only change code below this line

  // Before
  const highToday = HIGH_TEMPERATURES.today;
  const highTomorrow = HIGH_TEMPERATURES.tomorrow;
  //After
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

  // Only change code above this line

// Use Destructuring Assignment to Extract Values from Objects
  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

  // Only change code below this line

  // Before
  const today = HIGH_TEMPERATURES.today;
  const tomorrow = HIGH_TEMPERATURES.tomorrow;
  // After
  const { today, tomorrow } = HIGH_TEMPERATURES;

  // Only change code above this line

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };

  // Only change code below this line
  const half = ({ max, min }) => (max + min) / 2.0; 
  // Only change code above this line

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
  const source = [1,2,3,4,5,6,7,8,9,10];
  function removeFirstTwo(list) {
    "use strict";
    // Only change code below this line
    const [a, b, ...arr] = list; // Change this line
    // Only change code above this line
    return arr;
  }
  const arr = removeFirstTwo(source);

// Use export to Share a Code Block
  const uppercaseString = (string) => {
    return string.toUpperCase();
  }

  const lowercaseString = (string) => {
    return string.toLowerCase()
  }

  export { uppercaseString, lowercaseString }

// Use getters and setters to Control Access to an Object
  // Only change code below this line
  class Thermostat {
    constructor(temp) {
      this.temp = temp;
    }
    get temperature() {
      return 5 / 9 * (this.temp - 32)
    }
    set temperature(newTemp) {
      this.temp = newTemp;
    }
  }
  // Only change code above this line

  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius

// Write Concise Declarative Functions with ES6
  // Only change code below this line
  const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);

// Write Concise Object Literal Declarations Using Object Property Shorthand
  const createPerson = (name, age, gender) => {
    "use strict";
    // Only change code below this line
    return { name, age, gender };
    // Only change code above this line
  };