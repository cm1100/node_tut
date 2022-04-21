const http = require('http')


const server = http.createServer((req,res)=>{

	//console.log(req)
	console.log(req.url)

	if(req.url=='/about'){
	res.write('welcome to our homepage')
	
}
	res.end('we cant find the page')

})


server.listen(5000)