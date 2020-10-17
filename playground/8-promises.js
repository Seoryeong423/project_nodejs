// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve([7, 4, 1])
//         reject('Things went wrong!')
//     }, 2000)
// }) 

// doWorkPromise.then((result) => {
//     console.log('Success!', result)
// }).catch((error) => {
//     console.log('Error!', error)
// })

//then(); allows us to register a function to run when
//things went well

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(1, 2).then((sum) => {
//     console.log(sum)

//     add(sum, 5).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })

add(35, 74).then((sum) => {
    console.log(sum)
    return add(sum, 27)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})