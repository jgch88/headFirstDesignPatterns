const State = {
  init(gumballMachine) {
    this.gumballMachine = gumballMachine;
  },

  insertQuarter() {
    throw(`insertQuarter() not implemented!`);
  },

  ejectQuarter() {
    throw(`ejectQuarter() not implemented!`);
  },

  turnCrank() {
    throw(`turnCrank() not implemented!`);
  },

  dispense() {
    throw(`dispense() not implemented!`);
  },

  refill(numberOfGumballs) {
    if (numberOfGumballs > 0) {
      console.log(`Refilling ${numberOfGumballs} gumballs!`);
      this.gumballMachine._addCount(numberOfGumballs);
    } else {
      throw(`Please refill at least 1 gumball`);
    }
  },

}

module.exports = State;
