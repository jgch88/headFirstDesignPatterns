const BeverageClass = require('./BeverageClass.js');

class HouseBlend extends BeverageClass {
  constructor() {
    super();
    this.description = "House Blend Coffee";
  }

  cost() {
    return 0.89;
  }

}

module.exports = HouseBlend;
