"use strict";

// for Statements etc. ------------------------------------------------
let codeForEtcDiv_1 = document.getElementById("forEtcCode_1");
let outcomeForEtcDiv_1 = document.getElementById("forEtcOutput_1");

// Adds the example code to the html page. ----------------------------
let codeForEtcExample_1 =
`<pre><code>
let testOne = 2;
let testTwo = "2";

function compare(test_1, test_2) {
  return test_1 >= test_2;
};
let outcome = compare(testOne, testTwo);
</code></pre>`;

codeForEtcDiv_1.innerHTML = codeForEtcExample_1;

// Runs the function and adds the answer to the html page. -------
let testOneEx1 = 2;
let testTwoEx1 = "2";

function compare(test_1, test_2) {
  return test_1 >= test_2;
};

let outcomeForEtc_1 = compare(testOneEx1, testTwoEx1);
outcomeForEtcDiv_1.innerHTML = `outcome: <code>${outcomeForEtc_1}</code>`;
// /////////////////////////////////////////////////////////////////////
