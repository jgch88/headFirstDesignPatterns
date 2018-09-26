const State = require('./State.js');

class StateV3 extends State {
  constructor(gumballMachine) {
    super(gumballMachine);
  }

  refill(numberOfGumballs) {
    if (numberOfGumballs > 0) {
      console.log(`Refilling ${numberOfGumballs} gumballs!`);
      this.gumballMachine._addCount(numberOfGumballs);
    } else {
      throw(`Please refill at least 1 gumball`);
    }
  }

}

module.exports = StateV3;
