"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  //setting variable and finding the minimum and maximum numbers of the array
  let leftSum = 0;
  let rightSum = 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  //removing the first index and printing the array
  let leftFour = [...arr];
  const indexLeft = leftFour.indexOf(max);
  leftFour.splice(indexLeft, 1);

  //removing the last index and printing the array
  let rightFour = [...arr];
  const indexRight = rightFour.indexOf(min);
  rightFour.splice(indexRight, 1);

  //adding the sum
  leftSum = leftFour.reduce(function (leftSum, leftFour) {
    const updatedSum = leftSum + leftFour;
    return updatedSum;
  }, 0);
  //console.log(sumLeftFour);

  rightSum = rightFour.reduce(function (rightSum, rightFour) {
    const updatedSum = rightSum + rightFour;
    return updatedSum;
  }, 0);
  console.log(`${leftSum} ${rightSum}`);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
