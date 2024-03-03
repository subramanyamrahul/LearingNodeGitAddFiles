//Modules
//es-6 modules (Basic understanding )
//modules - Encapsulated Code (Share only minimum (Essentials ))
//common Js Library , Every File in node is a Module (by default )


const names = require('./4-names');
const Hi = require('./5-Utils');
const personName = require('./6-alternate_flavors')


Hi(names.name1)
Hi(names.name2)
console.log(personName)
