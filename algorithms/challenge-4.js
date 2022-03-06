function withdraw(amount) {
    let xAmt = amount % 100;
    let x = (amount - xAmt) / 100
    let yAmt = xAmt % 50;
    let y = (xAmt - yAmt) / 50;
    let z = yAmt / 20;

    return [x, y, z]
}
console.log(withdraw(250))
console.log(withdraw(370))

module.exports = withdraw