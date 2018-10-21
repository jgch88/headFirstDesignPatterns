const CondimentDecoratorClass = require('./CondimentDecorator.js');

class Mocha extends CondimentDecoratorClass {
  constructor(beverage) {
    super();
    this.beverage = beverage; // decorator wrapper around actual beverage for recursive delegation
  }

  getDescription() {
    return this.beverage.getDescription() + ", Mocha";
  }

  cost() {
    return 0.2 + this.beverage.cost();
  }
}

module.exports = Mocha;
