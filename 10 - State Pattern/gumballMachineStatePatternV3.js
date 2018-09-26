const GumballMachineV2 = require('./gumballMachineStatePatternV2.js');
const NoQuarterStateV3 = require('./NoQuarterStateV3.js');
const SoldOutStateV3 = require('./SoldOutStateV3.js');
const HasQuarterStateV3 = require('./HasQuarterStateV3.js');
const SoldStateV3 = require('./SoldStateV3.js');
const WinnerStateV3 = require('./WinnerStateV3.js')

class GumballMachineV3 extends GumballMachineV2 {
  constructor(count=0) {
    super(count);

    this.SoldOutState = new SoldOutStateV3(this);
    this.NoQuarterState = new NoQuarterStateV3(this);
    this.HasQuarterState = new HasQuarterStateV3(this);
    this.SoldState = new SoldStateV3(this);
    this.WinnerState = new WinnerStateV3(this);

    this.state = this.SoldOutState;

    if (count > 0) {
      this._setState(this.NoQuarterState);
    }

  }

  refill(numberOfGumballs) {
    this.state.refill(numberOfGumballs);
  }

  _addCount(numberOfGumballs) {
    this.count += numberOfGumballs;
  }


}

module.exports = GumballMachineV3;
