function maximumSubArray(numberArray, k) {
  if (numberArray.length < k) {
    console.log("Array length should be at least k");
    return;
  }
  //Start of the window
  let windowStart = 0;

  //The sum at any point in time
  let currentSum = numberArray.slice(0, k).reduce((a, b) => a + b, 0);

  //The maximum possible sum given k
  let maximumSum = 0;

  for (let windowEnd = k; windowEnd < numberArray.length; windowEnd++) {
    //Add next value to currentSum
    currentSum = currentSum + numberArray[windowEnd] - numberArray[windowStart];

    //Compare
    maximumSum = Math.max(currentSum, maximumSum);
    windowStart++;
  }

  return maximumSum;
}

let newArray = [2, 1, 5, 1, 3, 2, 6, 7, 3, 7];
let k = 5;
console.log(maximumSubArray(newArray, k));
