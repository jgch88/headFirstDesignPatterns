const State = require('./State.js');
const SoldOutState = require('./SoldOutState.js');
const NoQuarterState = require('./NoQuarterState.js');
const HasQuarterState = require('./HasQuarterState.js');
const SoldState = require('./SoldState.js');
const WinnerState = require('./WinnerState.js');

const GumballMachineState = Object.create(State);


GumballMachineState._getNoQuarterState = function() {
  return this.NoQuarterState;
};

GumballMachineState._getSoldOutState = function() {
  return this.SoldOutState;
};

GumballMachineState._getHasQuarterState = function() {
  return this.HasQuarterState;
};

GumballMachineState._getSoldState = function() {
  return this.SoldState;
};

GumballMachineState._getWinnerState = function() {
  return this.WinnerState;
};

GumballMachineState._setState = function(state) {
  this.state = state;
};

GumballMachineState.init = function(count) {
  this.count = count;

  this.SoldOutState = Object.create(SoldOutState);
  this.SoldOutState.init(this);
  this.NoQuarterState = Object.create(NoQuarterState);
  this.NoQuarterState.init(this);
  this.HasQuarterState = Object.create(HasQuarterState);
  this.HasQuarterState.init(this);
  this.SoldState = Object.create(SoldState);
  this.SoldState.init(this);
  this.WinnerState = Object.create(WinnerState);
  this.WinnerState.init(this);

  this.state = this.SoldOutState;

  if (this.count > 0) {
    this._setState(this._getNoQuarterState());
  }
};

GumballMachineState._releaseBall = function() {
  console.log(`A gumball comes rolling out the slot...`);
  if (this.count !== 0) {
    this.count -= 1;
  }
};

GumballMachineState.getCount = function() {
  return this.count;
};

GumballMachineState.getStatus = function() {
  console.log(`Mighty Gumball, Inc.`);
  console.log(`Javascript enabled Standing Gumball Model #2018`);
  console.log(`Inventory: ${this.count} gumballs`);
};

GumballMachineState.insertQuarter = function() {
  this.state.insertQuarter();
}

GumballMachineState.turnCrank = function() {
  this.state.turnCrank();
  this.state.dispense();
}

GumballMachineState.ejectQuarter = function() {
  this.state.ejectQuarter();
}

module.exports = GumballMachineState;

