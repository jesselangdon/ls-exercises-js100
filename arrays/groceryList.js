// Iterate through this grocery list, and print items in the list as they're removed.

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

for (i = groceryList.length - 1; i >= 0; i--) {
	console.log(groceryList.shift());
}


// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log(groceryList); // []