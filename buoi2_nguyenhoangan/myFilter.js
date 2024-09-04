Array.prototype.myFilter = function(callbck) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callbck(this[i])) {
            newArr = newArr.push(this[i])
        }
    }

}
arr = [1, 2, 3, 4, 5]
arr.myFilter((item) => { if (item % 2 == 0) console.log(item) })