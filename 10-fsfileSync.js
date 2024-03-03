const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/sub/First.txt' , 'utf-8')
const Second = readFileSync('./content/sub/Second.txt' , 'utf-8')


writeFileSync('./content/sub/result.txt ', `Hi there This is the content of the file ${first} , concatincated with second file ${Second}`,

{flag: 'a'} )
const result = readFileSync('./content/sub/result.txt', 'utf-8');
console.log(result)