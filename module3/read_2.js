const {readFile,writeFile} = require('fs')
const util = require('util')



const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start = async () => {
	try{

		const first = await readFilePromise('./content/c1.txt','utf-8')
		const second = await readFilePromise('./content/c2.txt','utf-8')
		const third = await writeFilePromise('./content/c3.txt','this is new text from now')

		console.log(first,second)
	}catch(err){

		console.log(error)

	}
}


start()