let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// should log 'false', because the let b = true statement is local only to that conditional