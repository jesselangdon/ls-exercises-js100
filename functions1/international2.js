function localGreet(languageCode) {
	let regionSplit = languageCode.split('_')[1]
	let regionCode = regionSplit.split('.')[0]
	switch (regionCode) {
		case 'US': return 'Hi!';
		break;
		case 'GB': return'Hello!';
		break;
		case 'AU': return 'Howdy!';
		break;
		}
}

console.log(localGreet('en_US.UTF-8'));
console.log(localGreet('en_GB.UTF-8'));
console.log(localGreet('en_AU.UTF-8'));