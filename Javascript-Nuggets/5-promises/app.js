// Promises

// async await is better
// consume/use promises

// Pending ==> Rejected || FulFilled

const promise = new Promise((resolve, reject) => {
    // resolve("hello world")
    reject("error")
})

console.log(promise)

promise.then((vegan) => console.log(vegan)).catch((error) => {console.log(error)});