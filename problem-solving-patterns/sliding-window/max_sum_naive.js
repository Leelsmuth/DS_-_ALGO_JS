// Given an array of intergers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of a consecutive elements from the original array. In the first example below [100, 200, 300] is a subarray of the original array, but [100, 300] is not

// maxSubarraySum([100, 200, 300, 400], 2) ... 700
// maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) ... 39
// maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) ... 5
// maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) ... 5
// maxSubarraySum([2,3], 3) ... null

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));


