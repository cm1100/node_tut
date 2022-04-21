

const path = module.require('path')

console.log(path.sep)


const filepath = path.join('/content','c1.txt')


console.log(filepath)


const base = path.basename(filepath)

console.log(base)


const absolute = path.resolve(__dirname,'content','c1.txt')

console.log(absolute)