

const EventEmitter = require('events')

const customEmitter = new EventEmitter()


customEmitter.on('response',(st,num)=>{
	console.log('data recieved')
	console.log(st,num)
})

customEmitter.on('response',()=>{
	console.log('data attack')
})

customEmitter.emit('response','hg',23)
customEmitter.emit('response')