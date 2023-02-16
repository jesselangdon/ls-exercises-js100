// Write a function that checks whether a string is empty or not.

function isBlank(str) {
	if (str.length === 0) {
		console.log(true);
	} else {
		console.log(false);
	}
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true