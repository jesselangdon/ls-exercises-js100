function localGreet(languageCode) {
	let regionSplit = languageCode.split('_')[1]
	let regionCode = regionSplit.split('.')[0]
	switch (regionCode) {
		case 'US': return 'Hi!';
		case 'GB': return'Hello!';
		case 'AU': return 'Howdy!';
		}
}

console.log(localGreet('en_US.UTF-8'));
console.log(localGreet('en_GB.UTF-8'));
console.log(localGreet('en_AU.UTF-8'));