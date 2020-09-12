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
