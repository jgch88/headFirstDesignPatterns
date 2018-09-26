// main() equivalent

const ForexDataSubject = require('./ForexDataSubject.js');
const consoleLoggerDisplayObserver = require('./consoleLoggerDisplayObserver.js');
const rateChangeDisplayObserver = require('./rateChangeDisplayObserver.js');

const ForexStation = new ForexDataSubject();
const ConsoleLoggerDisplay = new consoleLoggerDisplayObserver(ForexStation);
const RateChangeDisplay = new rateChangeDisplayObserver(ForexStation);


