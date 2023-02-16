let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
for (i = 0; i < cities.length; i++) {
	if (typeof cities[i] === 'object') {
		continue;
	}
	console.log(cities[i].length);
}