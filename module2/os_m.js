
const os = require('os')


const user = os.userInfo()

console.log(user)


//method returns the system uptime in seconds


console.log(
	`system uptime is ${os.uptime()} seconds`
	)


const currentOs = {
	name : os.type(),
	release : os.release(),
	totalMemory : os.totalmem(),

} 


console.log(currentOs)

