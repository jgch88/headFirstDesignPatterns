// <<interface>> State equivalent in JS
// OR an <<abstract class>>
// These two things are Java ideas rather than JS?

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
