const RateChangeDisplayObserver = {
  init() {
    this.previousUSDtoJPY = 0;
    this.currentUSDtoJPY = 0;
  },

  update({currentUSDtoJPYExchangeRate}) {
    this.previousUSDtoJPY = this.currentUSDtoJPY;
    this.currentUSDtoJPY = currentUSDtoJPYExchangeRate;
    this.display();
  },

  display() {
    console.log(`[RateChange]: USD/JPY Change: ${this._formatRateChangeString()}`);
  },

  _getRateChange() {
    return this.currentUSDtoJPY - this.previousUSDtoJPY;
  },

  _formatRateChangeString() {
    return (this._getRateChange() >= 0 ? 
      `+${this._getRateChange()}` :
      `${this._getRateChange()}`
    )
  },

}

module.exports = RateChangeDisplayObserver;
