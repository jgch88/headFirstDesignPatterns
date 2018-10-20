const DarkRoastClass = require('./DarkRoastClass.js');
const HouseBlendClass = require('./HouseBlendClass.js');

const darkRoast = new DarkRoastClass();
console.log(darkRoast.getDescription());
console.log(darkRoast.cost());

const houseBlend = new HouseBlendClass();
console.log(houseBlend.getDescription());
console.log(houseBlend.cost());
