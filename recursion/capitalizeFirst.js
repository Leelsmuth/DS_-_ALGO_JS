// Write a recursive function called capitalizeWords. Given an array of strings, capitalize the first letter of each string in the array

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

// Capitalize whole word
function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;

}

// Capitalize first letter
function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

console.log(capitalizeWords(['car', 'taco', 'banana']));
console.log(capitalizeFirst(['car', 'taco', 'banana']));