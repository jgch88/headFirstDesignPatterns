const GumballMachine = require('./gumballMachineStatePattern.js');
const WinnerState = require('./WinnerState.js');
const HasQuarterStateV2 = require('./HasQuarterStateV2.js');

class GumballMachineV2 extends GumballMachine {
  constructor(count=0) {
    super(count);
    this.WinnerState = new WinnerState(this);
    this.HasQuarterState = new HasQuarterStateV2(this);
  }

  _getWinnerState() {
    return this.WinnerState;
  }

}

module.exports = GumballMachineV2;
