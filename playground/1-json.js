const fs = require('fs')
// const book = {
//      title: 'Ego is the Enemy',
//      author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString() //convert to string
const user = JSON.parse(dataJSON) //parse JSON sting into javascript object

user.name = 'Laura'
user.age = 23

const userJSON = JSON.stringify(user) //convert javascript object into JSON string
fs.writeFileSync('1-json.json', userJSON)
