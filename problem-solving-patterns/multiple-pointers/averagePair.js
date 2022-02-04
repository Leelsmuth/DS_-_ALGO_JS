// Write a function called avaragePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the target

// averagePair([1, 2, 3], 2.5) ... true;
// averagePair([1, 2, 3, 5, 6, 7, 10, 12, 19], 8) ... true;
// averagePair([-1, 0, 3, 4, 5, 6], 8) ... false;
// averagePair([], 4) ... false;

function averagePair(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;
    console.log(average);
    if (average === val) {
      return true;
    } else if (average > val) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}