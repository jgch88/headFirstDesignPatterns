const BeverageClass = require('./BeverageClass.js');

class DarkRoastClass extends BeverageClass {
  constructor() {
    super();
    this.description = "A really dark roasted coffee.";
  }

  cost() {
    return 6;
  }
}

module.exports = DarkRoastClass;
