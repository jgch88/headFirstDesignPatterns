const gumballMachineProceduralV2 = require('./gumballMachineProceduralV2.js');

test('Gumball Machine Test Drive', () => {
  const gumballMachine = new gumballMachineProceduralV2(5);

  gumballMachine.status();

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  gumballMachine.status();

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  gumballMachine.status();
});
