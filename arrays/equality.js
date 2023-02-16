// Predict the output of the code. When the code is run, what is expected?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

// I originally assumed the output would be true, because I was thinking of how 
// two strings primitives would be compared i.e. '2, 6, 4' === '2, 6, 4'. BUT, arrays
// are not primitives. Because there were two separate arrays declared, JS compares
// whether the two variables are the same assigned array or not.