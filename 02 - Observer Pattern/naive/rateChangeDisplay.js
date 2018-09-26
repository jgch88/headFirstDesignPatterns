class rateChangeDisplay {
  constructor(forexData) {
    this.forexData = forexData;
    this.previousUSDtoJPY = 0;
    this.currentUSDtoJPY = 0;
  }

  update(currentUSDtoJPYExchangeRate) {
    this.previousUSDtoJPY = this.currentUSDtoJPY;
    this.currentUSDtoJPY = currentUSDtoJPYExchangeRate;
    console.log(`RateChangeUpdate: ${this.getRateChange()}`);
  }

  getRateChange() {
    return this.currentUSDtoJPY - this.previousUSDtoJPY;
  }

}

module.exports = rateChangeDisplay;
