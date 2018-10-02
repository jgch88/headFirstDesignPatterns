// main() equivalent
const consoleLoggerDisplayObserver = require('./ConsoleLoggerDisplayObserver.js');
const rateChangeDisplayObserver = require('./RateChangeDisplayObserver.js');
const ForexDataSubject = require('./ForexDataSubject.js');

const ConsoleLoggerDisplay = Object.create(consoleLoggerDisplayObserver);
ConsoleLoggerDisplay.init();
const RateChangeDisplay = Object.create(rateChangeDisplayObserver);
RateChangeDisplay.init();

const ForexStation = Object.create(ForexDataSubject);
ForexStation.init();


ForexDataSubject.registerObserver(ConsoleLoggerDisplay);
ForexDataSubject.registerObserver(RateChangeDisplay);


setTimeout(() => {
  ForexDataSubject.removeObserver(RateChangeDisplay);
}, 45000);

setTimeout(() => {
  ForexDataSubject.registerObserver(RateChangeDisplay);
}, 90000);
