const BeverageClass = require('./BeverageClass.js');

class HouseBlendClass extends BeverageClass {
  constructor() {
    super();
    this.description = "A lovely house blend.";
    this.cost = 5;
  }
}

module.exports = HouseBlendClass;
