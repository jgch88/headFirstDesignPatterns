const State = require('./State.js');

const NoQuarterState = Object.create(State);

NoQuarterState.insertQuarter = function() {
  console.log(`You inserted a quarter.`)
  this.gumballMachine._setState(this.gumballMachine._getHasQuarterState());
}

NoQuarterState.ejectQuarter = function() {
  console.log(`You haven't inserted a quarter.`)
}

NoQuarterState.turnCrank = function() {
  console.log(`You turned but there's no quarter.`);
}

NoQuarterState.dispense = function() {
  console.log(`You need to pay first.`)
}

module.exports = NoQuarterState;
