const StateV3 = require('./StateV3.js');

class NoQuarterStateV3 extends StateV3 {
  constructor(gumballMachine) {
    super(gumballMachine);
  }

  insertQuarter() {
    console.log(`You inserted a quarter.`)

    // as opposed to setState(gumballMachine.HasQuarterState), 
    // which breaks encapsulation and knowing implementation details
    this.gumballMachine._setState(this.gumballMachine._getHasQuarterState());
  }

  ejectQuarter() {
    console.log(`You haven't inserted a quarter.`)
  }

  turnCrank() {
    console.log(`You turned but there's no quarter.`);
  }

  dispense() {
    console.log(`You need to pay first.`)
  }

}

module.exports = NoQuarterStateV3;
