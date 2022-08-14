const {readFileSync, writeFileSync} = require('fs')


const first = readFileSync('./content/first.txt','utf8')
console.log('1')
const second = readFileSync('./content/second.txt','utf8')
console.log('2')

console.log(first)
console.log(second)

writeFileSync('./content/third.txt',
`Here is the result : ${first}, ${second} `,
{flag : 'a'})
console.log('3')