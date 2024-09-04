function calTip(money) {
    let tip;
    return tip = (money >= 50 && money <= 300) ?
        (money * (15 / 100)) : (money * (20 / 100));
}
console.log(`Tiền tip cho hóa đơn 50k là: ${calTip(50)}`)

function calMoney(money) {
    tip = calTip(money);
    total = money + tip;
    console.log(`The bill was ${money}, the tip was ${tip}, and the total value ${ total }`)
}
console.log("Test for bill value 275");
calMoney(275)
console.log("Test for bill 40")
calMoney(40)
console.log("Test for bill 430")
calMoney(430)