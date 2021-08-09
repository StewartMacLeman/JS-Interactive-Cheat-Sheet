"use strict";

// Numbers:  --------------------------------------------------------
let codeNumbersDiv_1 = document.getElementById("numbersCode_1");
let outcomeNumbersDiv_1 = document.getElementById("numbersOutput_1");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_1 =
`<pre><code>
let testOne = 2;
let testTwo = "2";

function compare(test_1, test_2) {
  return test_1 >= test_2;
};
let outcome = compare(testOne, testTwo);
</code></pre>`;

codeNumbersDiv_1.innerHTML = codeNumbersExample_1;

// Runs the function and adds the answer to the html page. -------
let testOneEx1 = 2;
let testTwoEx1 = "2";

function compare(test_1, test_2) {
  return test_1 >= test_2;
};

let outcomeNumbers_1 = compare(testOneEx1, testTwoEx1);
outcomeNumbersDiv_1.innerHTML = `outcome: <code>${outcomeNumbers_1}</code>`;
