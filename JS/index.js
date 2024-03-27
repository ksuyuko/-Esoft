var object = {
    a: "5",
    b: [0, 8, 16, 45],
    c: {
        value: 23
    },
    d: x = 5 + 5
}

function deepClone(obj) {
    var cloned = {}
    for (i in obj) cloned[i] = typeof obj[i] == 'object' ? deepClone(obj[i]) : obj[i]
    return
}

var object2 =  deepClone(object)

console.log(object)
console.log(object2)