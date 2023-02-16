function repeat(multiplier, str) {
	let strArray = [];
	for (i = 0; i < multiplier; i++) {
		strArray.push(str)
	}
	let strResult = strArray.join('');
	return strResult;
}

console.log(repeat(3, 'ha')); // 'hahaha'