const path = require('path')
console.log(path)

const filePath = path.join ('/content1' , 'content2','content3')
console.log(filePath)
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname , 'content1','content2','text.txt')
console.log(absolute)