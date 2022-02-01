//let inputArray = [3, 6, -2, -5, 7, 3];

//function solution(inputArray) {
 // let highest = inputArray[0] * inputArray[1];
  //for (let i = 1; i < inputArray.length - 1; i++) {
    //const product = inputArray[i] * inputArray[i + 1];
  //  if (highest < product) highest = product;
  //}
  //return highest;
//}

//solution();

let n =2

function solution(n) {
    return (n * n) + ((n - 1)*(n - 1))
}
solution(n)