"use strict";

// if Statements etc. ------------------------------------------------
let codeIfEtcDiv_1 = document.getElementById("ifEtcCode_1");
let outcomeIfEtcDiv_1 = document.getElementById("ifEtcOutput_1");

// Adds the example code to the html page. ----------------------------
let codeIfEtcExample_1 =
`<pre><code>
let testOne = 2;
let testTwo = "2";

function compare(test_1, test_2) {
  return test_1 >= test_2;
};
let outcome = compare(testOne, testTwo);
</code></pre>`;

codeIfEtcDiv_1.innerHTML = codeIfEtcExample_1;

// Runs the function and adds the answer to the html page. -------
let testOneEx1 = 2;
let testTwoEx1 = "2";

function compare(test_1, test_2) {
  return test_1 >= test_2;
};

let outcomeIfEtc_1 = compare(testOneEx1, testTwoEx1);
outcomeIfEtcDiv_1.innerHTML = `outcome: <code>${outcomeIfEtc_1}</code>`;
// /////////////////////////////////////////////////////////////////////
