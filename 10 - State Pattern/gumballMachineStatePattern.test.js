const gumballMachineStatePattern = require('./gumballMachineStatePattern.js');

test('Gumball Machine Test Drive', () => {
  const gumballMachine = new gumballMachineStatePattern(5);

  gumballMachine.status();

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  gumballMachine.status();

  gumballMachine.insertQuarter();
  gumballMachine.ejectQuarter();
  gumballMachine.turnCrank();

  gumballMachine.status();

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.ejectQuarter();

  gumballMachine.status();

  gumballMachine.insertQuarter();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  gumballMachine.status();
});
