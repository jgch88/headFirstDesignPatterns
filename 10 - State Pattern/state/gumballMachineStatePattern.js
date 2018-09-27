const NoQuarterState = require('./NoQuarterState.js');
const SoldOutState = require('./SoldOutState.js');
const HasQuarterState = require('./HasQuarterState.js');
const SoldState = require('./SoldState.js');

class GumballMachine {
  constructor(count=0) {
    this.count = count;
    this.SoldOutState = new SoldOutState(this);
    this.NoQuarterState = new NoQuarterState(this);
    this.HasQuarterState = new HasQuarterState(this);
    this.SoldState = new SoldState(this);

    this.state = this.SoldOutState;

    if (count > 0) {
      this._setState(this.NoQuarterState);
    }
  }

  insertQuarter() {
    this.state.insertQuarter();
  }

  ejectQuarter() {
    this.state.ejectQuarter();
  }

  turnCrank() {
    this.state.turnCrank();
    this.state.dispense();
  }

  getCount() {
    return this.count;
  }

  getStatus() {
    console.log(`Mighty Gumball, Inc.`);
    console.log(`Javascript enabled Standing Gumball Model #2018`);
    console.log(`Inventory: ${this.count} gumballs`);
  }

  _releaseBall() {
    console.log(`A gumball comes rolling out the slot...`);
    if (this.count !== 0) {
      this.count -= 1;
    }
  }

  // "protected" methods
  _setState(state) {
    this.state = state;
  }

  _getSoldOutState() {
    return this.SoldOutState;
  }

  _getNoQuarterState() {
    return this.NoQuarterState;
  }

  _getHasQuarterState() {
    return this.HasQuarterState;
  }

  _getSoldState() {
    return this.SoldState;
  }

}

module.exports = GumballMachine;
