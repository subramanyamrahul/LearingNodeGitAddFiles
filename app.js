const lodash  = require('lodash')

const arr = [1,[2,[3,6,[4,7]]]];
const newArr = lodash.flattenDeep(arr);
console.log(newArr)
// Lodash is a node package module that could be imported by declaring a constant variable and assigning it to require('lodash'), Before importing this dependency make sure ti install it , you could check its presence in dependencies class of Package.json 