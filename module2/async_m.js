

const {readFile,writeFile} = require('fs')


console.log("hi i am here")
readFile('./content/c1.txt','utf-8',(err,result)=>{
	if (err){
		console.log(err)
		return
	}
	const first = result
	readFile('./content/c2.txt','utf-8',(err,result)=>{
		if(err){
			console.log(err)
		}
		const second = result
		console.log('done')
	})
})



console.log('starting new task')
