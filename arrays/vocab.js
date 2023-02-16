// Given an array, log the length of each string item in the array

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...

for (i = 0; i < vocabulary.length; i++) {
	for (j = 0; j < vocabulary[i].length; j++) {
		console.log(vocabulary[i][j]);
	}
}