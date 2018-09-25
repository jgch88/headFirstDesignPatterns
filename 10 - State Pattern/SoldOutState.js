const State = require('./State.js');

class SoldOutState extends State {
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
}

module.exports = SoldOutState;
