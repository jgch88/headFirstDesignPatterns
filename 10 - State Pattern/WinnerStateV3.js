const WinnerState = require('./WinnerState.js');
const StateV3 = require('./StateV3.js');

// decision: once "transitions" are touched
// copy paste everything from V1 all the way to 
// current version and 'start afresh' with new
// root State
class WinnerStateV3 extends StateV3 {
  constructor(gumballMachine) {
    super(gumballMachine);
  }

  insertQuarter() {
    console.log(`Please wait, we're already giving you a gumball.`);
  }

  ejectQuarter() {
    console.log(`Sorry, you already turned the crank.`);
  }

  turnCrank() {
    console.log(`Turning twice doesn't get you another gumball!`);
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

module.exports = WinnerStateV3;
