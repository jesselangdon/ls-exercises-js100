// Write code that capitalizes the words in the input string, so that 
// the string is returned in camel case.

function capitalize(str) {
	let newString = '';
	let strArr = str.split(' ');
	for (let i = 0; i < strArr.length; i++) {
		let firstChar = strArr[i][0].toUpperCase();
		let otherChar = strArr[i].slice(1);
		let capitalized = firstChar + otherChar + ' ';
		newString += capitalized;
	}
	return newString;
}

console.log(capitalize('launch school tech & talk'));