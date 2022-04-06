function numSwap(number) {
    let numArr = number.toString().split('');
                              console.log(numArr)

    for (let i = 0; i < numArr.length; i +=2) {
    let result = numArr [i];
                              console.log(result)
    numArr[i] = numArr[i + 1];
    numArr[i + 1] = result;
   
  }
  return Number(numArr.join(''))
}
console.log(numSwap(1234))
console.log(numSwap(432156))


module.exports = numSwap
