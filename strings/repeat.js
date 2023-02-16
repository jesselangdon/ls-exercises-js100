// Implement a function that repeats an input string a given number of times
// Do not use the pre-defined string methog String.prototype.repeat()

function repeat(multiplier, str) {
	let strArray = [];
	for (i = 0; i < multiplier; i++) {
		strArray.push(str)
	}
	let strResult = strArray.join('');
	return strResult;
}

console.log(repeat(3, 'ha')); // 'hahaha'