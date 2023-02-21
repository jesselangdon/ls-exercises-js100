// Why does the following code snippet never output "It's true!"?

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {  // should be (prop === 'true')
    console.log("It's true!");
  }
}

// The conditional is looking to match the key with the boolean value true, when in fact 
// it's just another string. True (in the second snippet) should have quotes around it 
// to indicate it is a string.