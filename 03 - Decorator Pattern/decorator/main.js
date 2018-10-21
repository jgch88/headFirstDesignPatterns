const HouseBlend = require('./HouseBlend.js');
const Mocha = require('./Mocha.js');

let beverage = new HouseBlend();
console.log(beverage.getDescription());
console.log(beverage.cost());

beverage = new Mocha(beverage); // wrapper syntax
// python has its own decorator syntax
beverage = new Mocha(beverage);
console.log(beverage.getDescription());
console.log(beverage.cost());

