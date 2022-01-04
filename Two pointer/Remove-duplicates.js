/*
Problem Statement#
Given an array of sorted numbers, remove all duplicates from it. 
You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].
*/
function remove_duplicates(arr) {
  // index of the next non-duplicate element
  let nextNonDuplicate = 1;

  let i = 1;
  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate += 1;
    }
    i += 1;
  }

  return nextNonDuplicate;
}

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));

//I believe this is a better solution

const remove_duplicates = function (arr) {
  let leftIndex = 0,
    rightIndex = 1,
    duplicateCount = 0;

  while (rightIndex < arr.length) {
    if (arr[leftIndex] === arr[rightIndex]) {
      duplicateCount++;
    }
    leftIndex++;
    rightIndex++;
  }
  // TODO: Write your code here
  return arr.length - duplicateCount;
};

//Similar questions

//Problem 1: Given an unsorted array of numbers and a target ‘key’,
// remove all instances of ‘key’ in-place and return the new length of the array.

/*
  
    Example 1:
  
  Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
  Output: 4
  Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].
  Example 2:
  
  Input: [2, 11, 2, 2, 1], Key=2
  Output: 2
  Explanation: The first two elements after removing every 'Key' will be [11, 1].
  */

function remove_element(arr, key) {
  let nextElement = 0; // index of the next element which is not 'key'
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== key) {
      arr[nextElement] = arr[i];
      nextElement += 1;
    }
  }
  return nextElement;
}

console.log(
  `Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`
);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);
