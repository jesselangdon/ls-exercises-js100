let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

// because !sale = false, this should result in the following log:
// $3.99