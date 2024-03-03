//OS Module
const os = require('os')


//info about current user 
const  user = os.userInfo()
console.log(user)

//method to retuen the system uptime 
// The amount of Time the system is running since the last time it was rebooted 
console.log(`The System Uptime is ${os.uptime()}`)

const OsModuleOBJ = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeRam: os.freemem()
 
}
console.log(OsModuleOBJ)