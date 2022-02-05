function sumRange(num){
   if(num === 0) return 0; 
   return num + sumRange(num-1);
}

// RECURSIVE RANGE SOLUTION
// function recursiveRange(x){
//    if (x === 0 ) return 0;
//    return x + recursiveRange(x-1);
// }

console.log(sumRange(4))

                  
                                   
                                