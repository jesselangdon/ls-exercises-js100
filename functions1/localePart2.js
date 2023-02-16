function extractRegion(locale) {
	let languageCode = locale.slice(3,5);
	console.log(languageCode);
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'