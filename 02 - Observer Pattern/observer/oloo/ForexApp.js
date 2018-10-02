// main() equivalent
const consoleLoggerDisplayObserver = require('./ConsoleLoggerDisplayObserver.js');
const rateChangeDisplayObserver = require('./RateChangeDisplayObserver.js');
const ForexDataSubject = require('./ForexDataSubject.js');

const ForexORama = require('./ForexORama.js');
const forexORama = Object.create(ForexORama);

const ConsoleLoggerDisplay = Object.create(consoleLoggerDisplayObserver);
ConsoleLoggerDisplay.init();
const RateChangeDisplay = Object.create(rateChangeDisplayObserver);
RateChangeDisplay.init();

const ForexStation = Object.create(ForexDataSubject);
ForexStation.init();

forexORama.init(ForexStation);
ForexStation.ForexORama = forexORama;

ForexStation.registerObserver(ConsoleLoggerDisplay);
ForexStation.registerObserver(RateChangeDisplay);

setTimeout(() => {
  ForexStation.removeObserver(RateChangeDisplay);
}, 45000);

setTimeout(() => {
  ForexStation.registerObserver(RateChangeDisplay);
}, 90000);
