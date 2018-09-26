class consoleLoggerDisplayObserver {
  constructor(forexData) {
    this.USDtoJPY = 0;
    this.forexData = forexData;
    this.forexData.registerObserver(this);
  }

  update({currentUSDtoJPYExchangeRate}) {
    this.USDtoJPY = currentUSDtoJPYExchangeRate;
    this.display();
  }

  display() {
    console.log(`[ConsoleLogger]: Current USD/JPY exchange rate: ${this.USDtoJPY}`);
  }
}

module.exports = consoleLoggerDisplayObserver;
