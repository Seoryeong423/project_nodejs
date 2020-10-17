const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})



// const me = new User({
//     name: 'Mike',
//     email: 'MYEMAIL@MEAD.IO    ',
//     password: 'hello1234'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         trim: true,
//         required: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const task = new Task({
//     description: 'study for midterm exam'
// })

// task.save().then(() => {
//         console.log(task)
//     }).catch((error) => {
//         console.log('Error!', error)
//     })