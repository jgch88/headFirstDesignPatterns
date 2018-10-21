class BeverageClass {
  // no abstract classes in JS
  constructor() {
    this.description = "Unknown beverage";
  }

  getDescription() {
    return this.description;
  }

  cost() {
    // abstract method
  }
}

module.exports = BeverageClass;
