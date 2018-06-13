function changePossibilities(total, denominations) {
  //total 4
  //denominations [1,2,3]
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  // create array with 0 so sumation will work
  let arr = new Array(total + 1);

  // fill in the array with starting values (0)
  for (let i = 0; i <= total; i++) {
    arr[i] = 0;
  }

  // set the lowest value from denominations as first value of arr
  arr[0] = denominations[0];

  //iterate through denominations to check for each value
  for (let i = 0; i < denominations.length; i++) {
    // iterate through values based on current coin to sum the value at location j with value at location sub
    for (let j = denominations[i]; j <= total; j++) {
      let sub = j - denominations[i];
      arr[j] += arr[sub];
    }
  }

  // the value in arr at the  last (initial total) location is the number of possible number of change
  console.log(arr[total]);
  return arr[total];
}

changePossibilities(4,[1,2,3])
