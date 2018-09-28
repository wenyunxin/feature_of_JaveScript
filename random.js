const randomInt = require('random-int');

const frontZone = [...Array(5)].map(() => randomInt(1,35))

const backZone = [...Array(2)].map(() => randomInt(1,12));

console.log(frontZone, backZone);