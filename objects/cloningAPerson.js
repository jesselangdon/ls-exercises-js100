// Write a function clone that takes an object as an argument and returns a 
// shallow copy of that argument.

function clone(obj) {
  const objArray = Object.entries(obj);
  return Object.fromEntries(objArray);
  // or even simpler would be return Object.assing({}, obj);
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;
person.title = 'Prince';

console.log(person.age);          // 34
console.log(person.title);        // Prince
console.log(clonedPerson.age);    // 33
console.log(clonedPerson.title);  // Duke

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false