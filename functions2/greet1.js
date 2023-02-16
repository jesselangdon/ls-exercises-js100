function greet(greeting =  'Hello') {
	if (greeting) {
  	console.log(greeting + ', world!');
	}
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!