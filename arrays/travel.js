// Check whether an array of strings includes a given string.
// Do NOT use the built-in method Array.prototype.includes()

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(str, arr) {
	if (arr.find(element => element === str)) {
		return true;
	} else {
		return false;
	}
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false