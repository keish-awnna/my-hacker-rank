"use strict";

const fs = require("fs");

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
 * Complete the 'beautifulBinaryString' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING b as parameter.
 */

function beautifulBinaryString(b) {
  // Write your code here
  let changeCounter = 0;
  b = b.replace("010", "100");
  for (let i = 0; i < b.length - 1; i++) {
    if (b[i] === b[i + 2]) {
      changeCounter++;
    }
  }

  return changeCounter;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const b = readLine();

  const result = beautifulBinaryString(b);

  ws.write(result + "\n");

  ws.end();
}
