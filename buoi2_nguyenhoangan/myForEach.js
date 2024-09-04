Array.prototype.myForEach = function(callbck) {
    for (let i = 0; i < this.length; i++) {
        callbck(this[i], i, this)
    }
}
console.log("Test case 1: ")
var a = [7, 8, 6, 9]
a.myForEach(item => { console.log(item) })
console.log("Test case 2:")
a.myForEach((item, index) => console.log(`${index}. ${item} `))
console.log("Test 3:")
a.myForEach((item, index, arr) => console.log(`${index}. ${item}, arr=${arr}`))