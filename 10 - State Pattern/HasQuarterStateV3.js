const StateV3 = require('./StateV3.js');

class HasQuarterStateV3 extends StateV3 {
  constructor(gumballMachine) {
    super(gumballMachine);
  }

  insertQuarter() {
    console.log(`You can't insert another quarter.`);
  }

  ejectQuarter() {
    console.log(`Quarter returned.`);
    this.gumballMachine._setState(this.gumballMachine._getNoQuarterState());
  }

  turnCrank() {
    console.log(`You turned...`);
    if ((Math.random() < 0.1) && (this.gumballMachine.getCount() > 1)) {
      this.gumballMachine._setState(this.gumballMachine._getWinnerState());
    } else {
      this.gumballMachine._setState(this.gumballMachine._getSoldState());
    }
  }

  dispense() {
    console.log(`No gumball dispensed.`);
  }

}

module.exports = HasQuarterStateV3;
