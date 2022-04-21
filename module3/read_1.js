

const {readFile} = require('fs')
const util = require('util')



const readFilePromise = util.promisify(readFile)




/*
const get_Text = (path) => {
	return new Promise((resolve,reject)=>{


		readFile(path,'utf-8',(err,data)=>{
	if (err){
		reject(err)
	}else{
		resolve(data)
	}
		})

	})
}
*/

//get_Text('./content/c1677.txt').then((result)=>console.log(result)).then((err)=>{console.log(err)})


const start = async() => {
	try{
		const first = await get_Text('./content/c1.txt')
		const second = await get_Text('./content/c2.txt')
		console.log(first, second)

	}catch(err){
		console.log(error)
	}
	
}

start()