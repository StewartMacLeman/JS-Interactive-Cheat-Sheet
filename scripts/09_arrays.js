"use strict";

// Arrays:  --------------------------------------------------------
let codeArraysDiv_1 = document.getElementById("arraysCode_1");
let outcomeArraysDiv_1 = document.getElementById("arraysOutput_1");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_1 =
`<pre><code>
let testOne = 2;
let testTwo = "2";

function compare(test_1, test_2) {
  return test_1 >= test_2;
};
let outcome = compare(testOne, testTwo);
</code></pre>`;

codeArraysDiv_1.innerHTML = codeArraysExample_1;

// Runs the function and adds the answer to the html page. -------
let testOneEx1 = 2;
let testTwoEx1 = "2";

function compare(test_1, test_2) {
  return test_1 >= test_2;
};

let outcomeArrays_1 = compare(testOneEx1, testTwoEx1);
outcomeArraysDiv_1.innerHTML = `outcome: <code>${outcomeArrays_1}</code>`;
