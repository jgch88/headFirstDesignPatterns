const BeverageClass = require('./BeverageClassV2.js');

class DarkRoastClass extends BeverageClass {
  constructor() {
    super();
    this.description = "A really dark roasted coffee.";
    this.baseCost = 6;
  }
}

module.exports = DarkRoastClass;
