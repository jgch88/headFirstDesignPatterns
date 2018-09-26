class consoleLoggerDisplay {
  constructor(forexData) {
    this.forexData = forexData;
    this.USDtoJPY = 0;
  }

  update(currentUSDtoJPYExchangeRate) {
    this.USDtoJPY = currentUSDtoJPYExchangeRate;
    console.log(`ConsoleLoggerUpdate: ${this.USDtoJPY}`);
  }
}

module.exports = consoleLoggerDisplay;
