function isBlank(str) {
	let strTrim = str.trim();
	if (str.length === 0) {
		console.log(true);
	} else {
		console.log(false);
	}
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true