const os = require('os')

// info about curr user
console.log(os.userInfo())

// method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freemem : os.freemem()
}

console.log(currentOS)