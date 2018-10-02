const Subject = require('./Subject.js');

const ForexDataSubject = Object.create(Subject);
ForexDataSubject.init();


ForexDataSubject.getUSDtoJPYExchangeRate = function() {
  return this.ForexORama.getUSDtoJPYExchangeRate();
}

ForexDataSubject.exchangeRateChanged = function() {
  const currentUSDtoJPYExchangeRate = this.getUSDtoJPYExchangeRate();
  this.notifyObservers({
    currentUSDtoJPYExchangeRate
  });
}

module.exports = ForexDataSubject;
