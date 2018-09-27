const StateV3 = require('./StateV3.js');

class SoldOutStateV3 extends StateV3 {
  constructor(gumballMachine) {
    super(gumballMachine);
  }

  insertQuarter() {
    console.log(`You can't insert a quarter, the machine is sold out.`);
  }

  ejectQuarter() {
    console.log(`You can't eject, you haven't inserted a quarter yet.`);
  }

  turnCrank() {
    console.log(`You turned, but there are no gumballs.`);
  }

  dispense() {
    console.log(`No gumball dispensed.`);
  }

  refill(numberOfGumballs) {
    super.refill(numberOfGumballs);
    this.gumballMachine._setState(this.gumballMachine._getNoQuarterState());
  }

}

module.exports = SoldOutStateV3;
