const gumballMachineProcedural = require('./gumballMachineProcedural.js');

test('Gumball Machine Test Drive', () => {
  const gumballMachine = new gumballMachineProcedural(5);

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
