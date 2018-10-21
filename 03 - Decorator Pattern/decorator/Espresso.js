const BeverageClass = require('./BeverageClass.js');

class Espresso extends BeverageClass {
  constructor() {
    super();
    this.description = "Espresso";
  }

  cost() {
    return 1.99;
  }

}

module.exports = Espresso;
