const gumballMachineStatePatternV3 = require('./gumballMachineStatePatternV3.js');

test('Gumball Machine Test Drive', () => {
  const gumballMachine = new gumballMachineStatePatternV3(5);

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

test.only('Gumball Machine can be refilled', () => {
  const gumballMachine = new gumballMachineStatePatternV3(2);

  gumballMachine.getStatus();

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  gumballMachine.getStatus();

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  gumballMachine.refill(2);

  gumballMachine.getStatus();

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  gumballMachine.getStatus();
});
