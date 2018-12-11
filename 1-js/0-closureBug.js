function makeFunctionArray() {
    const arr = []

    for (var i = 0; i < 5; i++) {
        arr.push(function() {
            console.log(i)
        })
    }

    return arr
}

const functionArr = makeFunctionArray()

// we expect this to log 0, but it doesn't, it is 5
// but if we change the above for var i to let i, it works
functionArr[0]()