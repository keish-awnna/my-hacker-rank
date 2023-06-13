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
 * Complete the 'stringConstruction' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
let s = "abcd";
// let s = "abab";

function stringConstruction(s) {
  console.log(`this is s: ${s}`);

  // Write your code here
  let p = [];
  let costCounter = 0;

  console.log(`s: ${s}`);

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1] && s[i] + s[i + 1] !== s[i + 2] + s[i + 3]) {
      //   console.log(`s[i] & s[i +1] : ${s[i]} & ${s[i + 1]}`);
      let one = s[i];
      let two = s[i + 1];
      let three = s[i + 2];
      let four = s[i + 3];
      console.log(`one:${one}, two:${two}, three:${three}, four:${four}`);
    }
    costCounter++;
  }

  //   for (let i = 0; i < s.length; i++) {
  //     for (let j = 0; j < s.length; j++) {
  //       //   console.log(`i=${i} and j=${j}`);
  //       //   console.log(`s[i]=${s[i]} and s[j]=${s[j]}`);
  //       if (s[i] !== s[j]) {
  //         console.log(`s[i] ${s[i]} !== s[j] ${s[j]}`);
  //       }
  //     }
  //   }
  console.log(`costCounter: ${costCounter}`);
  return costCounter;
}

stringConstruction(s);

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    const result = stringConstruction(s);

    ws.write(result + "\n");
  }

  ws.end();
}
