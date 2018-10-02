const State = require('./State.js');

const SoldOutState = Object.create(State);

SoldOutState.insertQuarter = function() {
  console.log(`You can't insert a quarter, the machine is sold out.`);
}

SoldOutState.ejectQuarter = function() {
  console.log(`You can't eject, you haven't inserted a quarter yet.`);
}

SoldOutState.turnCrank = function() {
  console.log(`You turned, but there are no gumballs.`);
}

SoldOutState.dispense = function() {
  console.log(`No gumball dispensed.`);
}


module.exports = SoldOutState;
