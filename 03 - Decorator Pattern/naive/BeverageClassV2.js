class BeverageClass {
  constructor() {
    this.description = "A beverage";
    this.milk = false;
    this.soy = false;
    this.mocha = false;
    this.whip = false;
    this.baseCost = 0;
  }

  getDescription() {
    return this.description;
  }

  cost() {
    const milkCost = 0.1;
    const soyCost = 0.2;
    const mochaCost = 0.4;
    const whipCost = 0.3;

    let additionalCost = 0;

    if (this.hasMilk()) {
      additionalCost += milkCost;
    }

    if (this.hasSoy()) {
      additionalCost += soyCost;
    }
    
    if (this.hasMocha()) {
      additionalCost += mochaCost;
    }

    if (this.hasWhip()) {
      additionalCost += whipCost;
    }

    return this.baseCost + additionalCost;
  }

  hasMilk() {
    return this.milk;
  }

  setMilk() {
    this.milk = true;
  }

  hasSoy() {
    return this.soy;
  }

  setSoy() {
    this.soy = true;
  }

  hasMocha() {
    return this.mocha;
  }

  setMocha() {
    this.mocha = true;
  }

  hasWhip() {
    return this.whip;
  }

  setWhip() {
    this.whip = true;
  }
  
}

module.exports = BeverageClass;
