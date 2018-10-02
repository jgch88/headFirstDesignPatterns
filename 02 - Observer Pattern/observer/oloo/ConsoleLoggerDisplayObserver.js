const ConsoleLoggerDisplayObserver = {
  init() {
    this.USDtoJPY = 0;
  },

  update({currentUSDtoJPYExchangeRate}) {
    this.USDtoJPY = currentUSDtoJPYExchangeRate;
    this.display();
  },

  display() {
    console.log(`[ConsoleLogger]: Current USD/JPY exchange rate: ${this.USDtoJPY}`);
  },
}

module.exports = ConsoleLoggerDisplayObserver;
