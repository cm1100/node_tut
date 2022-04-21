

const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt')

let m=1

stream.on('data',(result)=>{
	console.log(result)
	m+=1
}) 


console.log(m)

