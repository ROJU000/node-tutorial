

// //exporting module
// module.exports = { john, peter }
// //importing a module- put it inside a const
// const importss = require(./)
// console.log(module)

const os = require('os')
const path = require('path')

//info about current user
const user = path.join()
console.log(user)

//method returns the system uptime in seconds
console.log(`they system uptime is ${os.uptime()} seconds`)


//to read and write file to system
const { readFileSync, writeFileSync } = require('fs')
