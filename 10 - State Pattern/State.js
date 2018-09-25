// <<interface>> State equivalent in JS

class State {
  constructor(gumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter() {
    throw(`insertQuarter() not implemented!`);
  }

  ejectQuarter() {
    throw(`ejectQuarter() not implemented!`);
  }

  turnCrank() {
    throw(`turnCrank() not implemented!`);
  }

  dispense() {
    throw(`dispense() not implemented!`);
  }
}

module.exports = State;
