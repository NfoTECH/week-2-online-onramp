function missingNumber(numArr) {
    
  let test = [1,2,3,4,5,6,7,8,9,10];
  let output =[]
  for (let i = 0; i < test.length; i++) {
    let complete = test[i];
    if(!numArr.includes(complete)) {
      output.push(complete)
    }
  }
  return output
}



console.log(missingNumber([1,2,3,4,6,7,8,9]))

module.exports = missingNumber
