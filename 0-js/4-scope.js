// "var" is lexically scoped, meaning it exists from time of declaration to end of func
if (true) {
    var lexicallyScoped = 'This exists until the end of the function'
}
  
console.log(lexicallyScoped)
  
// "let" and "const" are block scoped
if (true) {
    let blockScoped = 'This exists until the next }'
    const alsoBlockScoped = 'As does this'
}
  
// this variable doesn't exist
console.log(typeof blockScoped)
  
thisIsAlsoAVariable = "hello"

// thisIsNotHoisted() // errors
thisIsHoisted()

const thisIsAConst = 50
  
// thisIsAConst++ // error!

const constObj = {}

// consts are still mutable
constObj.a = 'a'

let thisIsALet = 51
thisIsALet = 50

// let thisIsALet = 51 // errors!

var thisIsAVar = 50
thisIsAVar = 51
var thisIsAVar = 'new value!'

function thisIsHoisted() {
    console.log('this is a function declared at the bottome of a file')
}

// if var thisIsNotHoisted exist, but the value is undefined, is not a func
const thisIsNotHoisted = function() {
    console.log('should this be hoited?')
}
