const BeverageClass = require('./BeverageClassV2.js');

class HouseBlendClass extends BeverageClass {
  constructor() {
    super();
    this.description = "A lovely house blend.";
    this.baseCost = 5;
  }
}

module.exports = HouseBlendClass;
