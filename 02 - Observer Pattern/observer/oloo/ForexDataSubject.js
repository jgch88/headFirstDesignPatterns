const ForexORama = require('./ForexORama.js');
const forexORama = Object.create(ForexORama);

const consoleLoggerDisplayObserver = require('./ConsoleLoggerDisplayObserver.js');
const rateChangeDisplayObserver = require('./RateChangeDisplayObserver.js');

const Subject = require('./Subject.js');

const ForexDataSubject = Object.create(Subject);
ForexDataSubject.init();
forexORama.init(ForexDataSubject);

const ConsoleLoggerDisplay = Object.create(consoleLoggerDisplayObserver);
ConsoleLoggerDisplay.init();
ForexDataSubject.registerObserver(ConsoleLoggerDisplay);
const RateChangeDisplay = Object.create(rateChangeDisplayObserver);
RateChangeDisplay.init();
ForexDataSubject.registerObserver(RateChangeDisplay);

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

setTimeout(() => {
  ForexDataSubject.removeObserver(RateChangeDisplay);
}, 45000);

setTimeout(() => {
  ForexDataSubject.registerObserver(RateChangeDisplay);
}, 90000);


module.exports = ForexDataSubject;
