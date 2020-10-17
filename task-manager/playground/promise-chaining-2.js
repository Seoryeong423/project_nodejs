require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f7eabc1bbcd072c608cddc3').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5f89cf79e875d53af4719816').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})