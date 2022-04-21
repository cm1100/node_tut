const names = require('./names')
const sayHi = require('./utils')

console.log(sayHi)

console.log(names)

sayHi('susan') 

sayHi(names['john'])


let sum=0;
function myFirst(item){
	sum+=item

}

let names2 =[1,2,3,4]

let result = names2.forEach(myFirst)

console.log(result)


for (let x of names2){
	console.log(x)
}

for (let c in names){
	console.log(names[c])
}