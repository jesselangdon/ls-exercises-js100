// Add a new property to the jane object, so that when the user enters a name,
// the code logs the response as 'Hej, Bobby!'

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: (name) => console.log(`Hej, ${name}!`)
};

jane.greet('Bobby'); // Hej, Bobby!
jane.greet('Jesse');