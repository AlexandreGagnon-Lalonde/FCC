// Create a Basic JavaScript Object
  let dog = {
    name: 'asdf',
    numLegs: 4
  };

// Use Dot Notation to Access the Properties of an Object
  let dog = {
    name: "Spot",
    numLegs: 4
  };
  // Only change code below this line
  console.log(dog.name, dog.numLegs)

// Create a Method on an Object
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return `This dog has ${dog.numLegs} legs.`}
  };

  dog.sayLegs();

// Make Code More Reusable with the this Keyword
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };

  dog.sayLegs();

// Define a Constructor Function
  function Dog() {
    this.name = 'Spot';
    this.color = 'Gold';
    this.numLegs = 4;
  }

// Use a Constructor to Create Objects
  function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  let hound = new Dog();

// Extend Constructors to Receive Arguments
  function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  let terrier = new Dog('Spot', 'Gold')

// Verify an Object's Constructor with instanceof
  function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }

  // Only change code below this line
  let myHouse = new House(34);
  myHouse instanceof House;

// Understand Own Properties
  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }

  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
      ownProps.push(property)
    }
  }

// Use Prototype Properties to Reduce Duplicate Code
  function Dog(name) {
    this.name = name;
  }

  Dog.prototype.numLegs = 4;

  // Only change code above this line
  let beagle = new Dog("Snoopy");

// Iterate Over All Properties
  function Dog(name) {
    this.name = name;
  }

  Dog.prototype.numLegs = 4;

  let beagle = new Dog("Snoopy");

  let ownProps = [];
  let prototypeProps = [];

  // Only change code below this line
  for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
      ownProps.push(property)
    } else {
      prototypeProps.push(property)
    }
  }

// Understand the Constructor Property
  function Dog(name) {
    this.name = name;
  }

  // Only change code below this line
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true
    } else {
      return false
    }
  }

// Change the Prototype to a New Object
  function Dog(name) {
    this.name = name;
  }

  Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function() {
      console.log('nom')
    },
    describe: function() {
      console.log(`I am ${this.name}`)
    }
  };

// Remember to Set the Constructor Property when Changing the Prototype
  function Dog(name) {
    this.name = name;
  }

  // Only change code below this line
  Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

// Understand Where an Object’s Prototype Comes From
  function Dog(name) {
    this.name = name;
  }

  let beagle = new Dog("Snoopy");

  // Only change code below this line
  Dog.prototype.isPrototypeOf(beagle)

// Understand the Prototype Chain
  function Dog(name) {
    this.name = name;
  }

  let beagle = new Dog("Snoopy");

  Dog.prototype.isPrototypeOf(beagle);  // yields true

  // Fix the code below so that it evaluates to true
  Object.prototype.isPrototypeOf(Dog.prototype);

// Use Inheritance So You Don't Repeat Yourself
  function Cat(name) {
    this.name = name;
  }

  Cat.prototype = {
    constructor: Cat,
  };

  function Bear(name) {
    this.name = name;
  }

  Bear.prototype = {
    constructor: Bear,
  };

  function Animal() { }

  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log('nom')
    }
  };

// Inherit Behaviors from a Supertype
