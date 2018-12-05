function sumAllinRange(arr) {
  arr.sort((a,b)=> {return a - b});
  let firstNumber = arr[0];
  let secondNumber = arr[1];
  let counterVar = 0;

  for (let i = firstNumber; i<= secondNumber; i++) {
    counterVar += i;
  }
  return counterVar;
}

sumAllinRange([1, 4]);
