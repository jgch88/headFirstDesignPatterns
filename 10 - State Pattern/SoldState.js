const State = require('./State.js');

class SoldState extends State {
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
    this.gumballMachine._releaseBall();
    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine._setState(this.gumballMachine._getNoQuarterState());
    } else {
      console.log(`Oops, out of gumballs!`);
      this.gumballMachine._setState(this.gumballMachine._getSoldOutState());
    }
  }
}

module.exports = SoldState;
