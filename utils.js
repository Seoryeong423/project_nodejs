//const fs = require('fs')

//fs.writeFileSync('notes.txt','My name is Seoryeong Oh.')

//fs.appendFileSync('notes.txt', '  I wanna sleepppp')

//const add = require('./utils.js')

//const name = 'Laura'

//const sum = add(4, -2)

//console.log(sum)

console.log('utils.js')

const name = 'Lety'

const add = function (a,b) {
    return a + b
}

module.exports = add

//

const validator = require('validator')
console.log(validator.isURL('https://www.naver.com'))

//

const chalk = require('chalk')
console.log(chalk.bold.yellow.inverse('Success!'))

//

const msg = getNotes()
console.log(msg)
 
console.log(chalk.red('Success'))

console.log(process.argv[2])

//

if (command === 'add') {
    console.log('➕ Adding note!')
} else if (command === 'remove') {
    console.log('➖ Removing note!')
}