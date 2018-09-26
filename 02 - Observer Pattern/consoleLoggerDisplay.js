class consoleLoggerDisplay {
  constructor(forexData) {
    this.forexData = forexData;
    this.USDtoJPY = 0;
  }

  update() {
    this.USDtoJPY = this.forexData.getUSDtoJPYExchangeRate();
    console.log(`ConsoleLoggerUpdate: ${this.USDtoJPY}`);
  }
}

module.exports = consoleLoggerDisplay;
