function catAge(humanYears) {
	let catYears = 0
	if (humanYears >= 1) {
		catYears = 15;
	}
	if (humanYears >= 2) {
		catYears = 24;
	}
	if (humanYears > 2) {
		catYears = ((humanYears - 2) * 4) + catYears;
	}
	console.log(catYears);
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32
catAge(10); // 56
catAge(11); // 60