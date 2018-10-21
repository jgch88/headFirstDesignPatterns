const BeverageClass = require('./BeverageClass.js');

class CondimentDecoratorClass extends BeverageClass {
  constructor() {
    super();
  }

  getDescription() {
    // abstract method
  }

}

module.exports = CondimentDecoratorClass;
