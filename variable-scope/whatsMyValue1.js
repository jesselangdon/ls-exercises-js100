console.log(greeting);

var greeting = 'Hello world!';

// undefined

// all variables in JS declared with 'var' are hoisted, meaning they are virtually
// moved to the beginning of the scope. Thus this code snippet behaves like this:

// var greeting;

// console.log(greeting);

// greeting = 'Hello world!';

// because greeting was declared without being assigned a value, it is undefined.