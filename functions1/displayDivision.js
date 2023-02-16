function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree();
// should result in the following log statements:
//	3 / 1 = 3
//  6 / 2 = 3
//  9 / 3 = 3
//  etc. up to 30 / 10 = 3