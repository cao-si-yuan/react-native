const o = new Object()
o.firstName = "siyuan"
o.lastName = "cao"
o.greet = function() {
    console.log("hi!")
}

const o2 = {}
o.firstName = "siyuan"
o['lastName'] = "cao"
const key = "isTeaching"
o[key] = true
o['greet'] = function() {
    console.log("hi!")
}

const o3 = {
    1: "test",
    firstName: "siyuan",
    lastName: "cao",
    isTeaching: true,
    greet: function() {
        console.log("hi!")
    },
    address: {
        street: "pudong",
        number: 123,
    }
}