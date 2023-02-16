let counter = 0;
while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}
// this will not execute, since counter will never be > 0


let counter = 0;
do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);
// this will execute one loop iteration, but no others since the 'coutner > 0' will not be met.
