function calculateBMI(heightCM, weightKG) {	
	let heightM = heightCM / 100;
	let bmi = weightKG / heightM**2;
	console.log(bmi.toFixed(2));
}

calculateBMI(180, 80); // "24.69"