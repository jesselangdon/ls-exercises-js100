function transform(string1, substring1, substring2) {
	return string1.replace(substring1, substring2);
}

console.log(transform('Captain Ruby', 'Ruby', 'JavaScript'));