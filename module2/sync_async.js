

const {readFileSync,writeFileSync} = require('fs')




const first = readFileSync('content/c1.txt','utf-8')

//console.log('content/txtx')
//console.log('./content/txtt')
console.log(first)

const second = readFileSync('content/c2.txt','utf-8')
console.log(second)


writeFileSync('content/result.txt',`result ${first} and ${second}`,{"flag":"a"})