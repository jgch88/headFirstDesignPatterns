const gumballMachineStatePatternV2 = require('./gumballMachineStatePatternV2.js');

test('Gumball Machine Test Drive', () => {
  const gumballMachine = new gumballMachineStatePatternV2(5);

  gumballMachine.getStatus();

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  gumballMachine.getStatus();

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  gumballMachine.getStatus();
});
