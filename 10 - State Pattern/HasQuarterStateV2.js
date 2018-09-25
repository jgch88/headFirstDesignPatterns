const HasQuarterState = require('./HasQuarterState.js');

class HasQuarterStateV2 extends HasQuarterState {
  constructor(gumballMachine) {
    super(gumballMachine);
  }

  turnCrank() {
    console.log(`You turned...`);
    if ((Math.random() < 0.1) && (this.gumballMachine.getCount() > 1)) {
      this.gumballMachine._setState(this.gumballMachine._getWinnerState());
    } else {
      this.gumballMachine._setState(this.gumballMachine._getSoldState());
    }
  }


}

module.exports = HasQuarterStateV2;
