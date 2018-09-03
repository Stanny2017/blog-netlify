
    var promise = new Promise((resolve, reject) => {
        setTimeout(resolve('err'), 10000)
        console.log('324')
    })
    promise.then(() => {
        console.log('resolve')
    })
