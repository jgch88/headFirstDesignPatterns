const ForexORama = require('./ForexORama.js');

const Subject = require('./Subject.js');

// is there a dependency inversion here? why does the
// ForexData object depend on the consoleLoggerDisplay
// instead of the other way around?

class ForexDataSubject extends Subject {

  constructor() {
    super();
    this.ForexORama = new ForexORama(this);
  }

  getUSDtoJPYExchangeRate() {
    return this.ForexORama.getUSDtoJPYExchangeRate();
  }

  exchangeRateChanged() {
    const currentUSDtoJPYExchangeRate = this.getUSDtoJPYExchangeRate();
    this.notifyObservers({
      currentUSDtoJPYExchangeRate
    });
  }

}

module.exports = ForexDataSubject;
