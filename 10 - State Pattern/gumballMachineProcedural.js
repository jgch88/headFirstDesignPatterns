class GumballMachine {
  constructor(count=0) {
    this.count = count;
    this.SOLD_OUT = 0;
    this.NO_QUARTER = 1;
    this.HAS_QUARTER = 2;
    this.SOLD = 3;

    this.state = this.SOLD_OUT;

    if (count > 0) {
      this.state = this.NO_QUARTER;
    }
  }

  insertQuarter() {
    if (this.state === this.HAS_QUARTER) {
      console.log(`You can't insert another quarter.`);
    } else if (this.state === this.NO_QUARTER) {
      console.log(`You inserted a quarter.`)
    } else if (this.state === this.SOLD_OUT) {
      console.log(`You can't insert a quarter, the machine is sold out.`);
    } else if (this.state === this.SOLD) {
      console.log(`Please wait, we're already giving you a gumball.`);
    }
  }

  ejectQuarter() {
    if (this.state === this.HAS_QUARTER) {
      console.log(`Quarter returned.`);
      this.state = this.NO_QUARTER;
    } else if (this.state === this.NO_QUARTER) {
      console.log(`You haven't inserted a quarter.`)
    } else if (this.state === this.SOLD) {
      console.log(`Sorry, you already turned the crank.`);
    } else if (this.state === this.SOLD_OUT) {
      console.log(`You can't eject, you haven't inserted a quarter yet.`);
    }
  }

  turnCrank() {
    if (this.state === this.SOLD) {
      console.log(`Turning twice doesn't get you another gumball!`);
    } else if (this.state === this.NO_QUARTER) {
      console.log(`You turned but there's no quarter.`);
    } else if (this.state === this.SOLD_OUT) {
      console.log(`You turned, but there are no gumballs.`);
    } else if (this.state === HAS_QUARTER) {
      console.log(`You turned...`);
      this.state = this.SOLD;
      this.dispense();
    }
  }

  dispense() {
    if (this.state === this.SOLD) {
      console.log(`A gumball comes rolling out the slot.`);
      this.count -= 1;
      if (this.count === 0) {
        console.log(`Oops, out of gumballs!`);
        this.state = this.SOLD_OUT;
      } else {
        this.state = this.NO_QUARTER;
      }
    } else if (this.state === this.NO_QUARTER) {
      console.log(`You need to pay first.`)
    } else if (this.state === this.SOLD_OUT) {
      console.log(`No gumball dispensed.`);
    } else if (this.state === this.HAS_QUARTER) {
      console.log(`No gumball dispensed.`);
    }
  }
}
