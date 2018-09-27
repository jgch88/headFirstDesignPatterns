const State = require('./State.js');

class HasQuarterState extends State {
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
    this.gumballMachine._setState(this.gumballMachine._getSoldState());
  }

  dispense() {
    console.log(`No gumball dispensed.`);
  }
}

module.exports = HasQuarterState;
