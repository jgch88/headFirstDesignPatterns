const ForexORama = require('./ForexORama.js');
const Subject = require('./Subject.js');

const forexORama = Object.create(ForexORama);
const ForexDataSubject = Object.create(Subject);
ForexDataSubject.init();
forexORama.init(ForexDataSubject);

ForexDataSubject.ForexORama = forexORama;

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
