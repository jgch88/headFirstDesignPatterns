const State = require('./State.js');

const SoldState = Object.create(State);

SoldState.insertQuarter = function() {
  console.log(`Please wait, we're already giving you a gumball.`);
}

SoldState.ejectQuarter = function() {
  console.log(`Sorry, you already turned the crank.`);
}

SoldState.turnCrank = function() {
  console.log(`Turning twice doesn't get you another gumball!`);
}

SoldState.dispense = function() {
  this.gumballMachine._releaseBall();
  if (this.gumballMachine.getCount() > 0) {
    this.gumballMachine._setState(this.gumballMachine._getNoQuarterState());
  } else {
    console.log(`Oops, out of gumballs!`);
    this.gumballMachine._setState(this.gumballMachine._getSoldOutState());
  }
}

module.exports = SoldState;

