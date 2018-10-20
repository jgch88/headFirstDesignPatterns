const DarkRoastClass = require('./DarkRoastClassV2.js');
const HouseBlendClass = require('./HouseBlendClassV2.js');

const darkRoast = new DarkRoastClass();
console.log(darkRoast.getDescription());
console.log(darkRoast.cost());

const houseBlend = new HouseBlendClass();
console.log(houseBlend.getDescription());
console.log(houseBlend.cost());
houseBlend.setMilk();
houseBlend.setMocha();
console.log(houseBlend.cost());

