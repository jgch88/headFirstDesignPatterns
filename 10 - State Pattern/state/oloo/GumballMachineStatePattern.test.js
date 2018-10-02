const GumballMachineState = require('./GumballMachineStatePattern.js');

test('Gumball Machine Test Drive', () => {
  const gumballMachine = Object.create(GumballMachineState);
  gumballMachine.init(5);

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
