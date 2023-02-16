const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

// should return an error due to reassigning a constant (declared on line 1).