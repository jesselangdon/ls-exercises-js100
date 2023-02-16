function removeLastChar(str) {
	let returnStr = str.slice(0, str.length - 1);
	console.log(returnStr);
	return returnStr;
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'