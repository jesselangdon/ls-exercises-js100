function greet(greeting = 'Hello', world = 'world') {
	if (greeting) {
  	console.log(greeting + ', ' + world + '!');
	}
}


greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!