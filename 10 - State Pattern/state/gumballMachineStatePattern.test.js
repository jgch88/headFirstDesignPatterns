const gumballMachineStatePattern = require('./gumballMachineStatePattern.js');

test('Gumball Machine Test Drive', () => {
  const gumballMachine = new gumballMachineStatePattern(5);

  gumballMachine.getStatus();

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  gumballMachine.getStatus();

  gumballMachine.insertQuarter();
  gumballMachine.ejectQuarter();
  gumballMachine.turnCrank();

  gumballMachine.getStatus();

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.ejectQuarter();

  gumballMachine.getStatus();

  gumballMachine.insertQuarter();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  gumballMachine.getStatus();
});
