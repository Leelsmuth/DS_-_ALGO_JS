// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits

// Solve in O(N) time

function sameFrequency(first, second) {
  // good luck. Add any arguments you deem necessary.
  first = first.toString().split('');
  second = second.toString().split('');

  if (first.length !== second.length) {
    return false;
  }

  const lookup1 = {};
  const lookup2 = {};

  for (let i of first) {
    lookup1[i] = (lookup1[i] | 0) + 1;
  }

  for (let i of second) {
    lookup2[i] = (lookup2[i] | 0) + 1;
  }

  for (let key in lookup1) {
    // if (!(key in lookup2)) {
    //   return false;
    // }
    if (lookup2[key] !== lookup1[key]) {
      return false;
    }
  }
  return true;
}



