// Determine what difference there will be in output of the two code snippets below (if any).

// let ocean = {};
// let prefix = 'Indian';

// ocean.prefix = 'Pacific';

// console.log(ocean); // should log '{prefix:Pacific}'



let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // should log '{Indian:Pacific}'