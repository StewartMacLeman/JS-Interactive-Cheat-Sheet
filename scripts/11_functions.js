"use strict";

// Functions:  --------------------------------------------------------
let codeFunctionsDiv_1 = document.getElementById("functionsCode_1");
let outcomeFunctionsDiv_1 = document.getElementById("functionsOutput_1");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_1 =
`<pre><code>
let testOne = 2;
let testTwo = "2";

function compare(test_1, test_2) {
  return test_1 >= test_2;
};
let outcome = compare(testOne, testTwo);
</code></pre>`;

codeFunctionsDiv_1.innerHTML = codeFunctionsExample_1;

// Runs the function and adds the answer to the html page. -------
let testOneEx1 = 2;
let testTwoEx1 = "2";

function compare(test_1, test_2) {
  return test_1 >= test_2;
};

let outcomeFunctions_1 = compare(testOneEx1, testTwoEx1);
outcomeFunctionsDiv_1.innerHTML = `outcome: <code>${outcomeFunctions_1}</code>`;
