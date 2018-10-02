const State = require('./State.js');

const HasQuarterState = Object.create(State);

HasQuarterState.insertQuarter = function() {
  console.log(`You can't insert another quarter.`);
}

HasQuarterState.ejectQuarter = function() {
  console.log(`Quarter returned.`);
  this.gumballMachine._setState(this.gumballMachine._getNoQuarterState());
}

HasQuarterState.turnCrank = function() {
  console.log(`You turned...`);
  if ((Math.random() < 0.1) && (this.gumballMachine.getCount() > 1)) {
    this.gumballMachine._setState(this.gumballMachine._getWinnerState());
  } else {
    this.gumballMachine._setState(this.gumballMachine._getSoldState());
  }
}

HasQuarterState.dispense = function() {
  console.log(`No gumball dispensed.`);
}

module.exports = HasQuarterState;
