// Write code that will create a new array called nestedPerson that is a nested array
// which stores the properties for the person object.

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

let nestedPerson = Object.entries(person);
console.log(nestedPerson);