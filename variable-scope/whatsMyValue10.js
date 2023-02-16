const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

// should log firstname: 'Jane', lastname: 'Doe. Properties within a constant object
// can be mutated.