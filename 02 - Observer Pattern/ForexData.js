const ForexORama = require('./ForexORama.js');
const consoleLoggerDisplay = require('./consoleLoggerDisplay.js');
const rateChangeDisplay = require('./rateChangeDisplay.js');

// is there a dependency inversion here? why does the
// ForexData object depend on the consoleLoggerDisplay
// instead of the other way around?

class ForexData {

  constructor() {
    this.ForexORama = new ForexORama(this);
    this.consoleLoggerDisplay = new consoleLoggerDisplay(this);
    this.rateChangeDisplay = new rateChangeDisplay(this);
  }

  getUSDtoJPYExchangeRate() {
    return this.ForexORama.getUSDtoJPYExchangeRate();
  }

  exchangeRateChanged() {
    const currentUSDtoJPYExchangeRate = this.getUSDtoJPYExchangeRate();
    this.consoleLoggerDisplay.update(currentUSDtoJPYExchangeRate);
    this.rateChangeDisplay.update(currentUSDtoJPYExchangeRate);
  }

}


const f = new ForexData();
/*
console.log(f.getUSDtoJPYExchangeRate());
setTimeout(
  () => {
    console.log(f.getUSDtoJPYExchangeRate())
  },
  30000
)
*/

module.exports = ForexData;
