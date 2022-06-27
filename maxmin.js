function maxMin() {
  const input = prompt("Please enter the numbers");
  const array = input.split(",");
  const arrLength = array.length;
  let smallestNum = Number(array[0]);
  let largestNum = Number(array[0]);
  let output = [];

  for (var i = 0; i < arrLength; i++) {
    let compareNum = Number(array[i]);
    if (compareNum < smallestNum) {
      smallestNum = compareNum;
    }
    if (compareNum > largestNum) {
      largestNum = compareNum;
    }
  }
  output.push(smallestNum);
  output.push(largestNum);
  console.log(output);
}
maxMin();
