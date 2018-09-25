const SoldState = require('./SoldState.js');

class WinnerState extends SoldState {
  constructor(gumballMachine) {
    super(gumballMachine);
  }

  dispense() {
    console.log(`YOU'RE A WINNER! You get two gumballs for your quarter`);
    this.gumballMachine._releaseBall();
    this.gumballMachine._releaseBall();
    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine._setState(this.gumballMachine._getNoQuarterState());
    } else {
      console.log(`Oops, out of gumballs!`);
      this.gumballMachine._setState(this.gumballMachine._getSoldOutState());
    }
  }
}

module.exports = WinnerState;
