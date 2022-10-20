//You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

function sum(arr){
    let sumEl = 0 
    arr.forEach(el => {
      if(el > 0) {
        sumEl += el
      }
    })
    return sumEl
  }
  
sum([1,-4,7,12] )

//Given an array of integers.

//Return an array, where the first element is the count of positives numbers and the second element is sum //of negative numbers. 0 is neither positive nor negative.

//If the input is an empty array or is null, return an empty array.

//Example
//For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPosNeg(arr) {
    if(arr.length === 0) {
      return []
    }
    
    /*newArr = []
    sumElPos = 0
    sumElNeg = 0
    arr.forEach((el,i) => {
      if(el > 0) {
        sumElPos = i  
      }
      if(el < 0) {
        sumElNeg += arr[i]
      }
    })
    newArr.push(sumElPos+1)
    newArr.push(sumElNeg)
    return newArr*/
    
    let arr1 = arr.filter(el => el > 0).length
    let sum = 0
    arr.filter(el => el < 0).forEach(el => sum += el)
    return [arr1,sum]
  }
  
  console.log(countPosNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))