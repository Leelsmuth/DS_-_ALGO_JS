// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

// areThereDuplicates(1, 2, 3) ... false;
// areThereDuplicates(1, 2, 2) ... true;
// areThereDuplicates('a', 'b', 'c', 'd') ... true;


function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}