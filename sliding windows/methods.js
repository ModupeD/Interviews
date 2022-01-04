
function find_averages_of_subarrays(K, arr) {
    arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
    K=5;
   
     const result = [];
     for (let i = 0; i < arr.length - K + 1; i++) {
       // find sum of next 'K' elements
       let sum = 0.0;
       for (let j = i; j < i + K; j++) {
         sum += arr[j];
       }
       result.push(sum / K); // calculate average
     }
   
     return result;
   }
   
   
   const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
 console.log(`Averages of subarrays of size K: ${result}`);
 
 //Given an array of characters where each character represents a fruit tree, 
 //you are given two baskets, and your goal is to put maximum number of fruits in each basket. 
 //The only restriction is that each basket can have only one type of fruit.
 
 //You can start with any tree, but you can’t skip a tree once you have started. 
 //You will pick one fruit from each tree until you cannot, i.e., 
 //you will stop when you have to pick from a third fruit type.
 
 