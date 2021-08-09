"use strict";

// Strings:  --------------------------------------------------------
let codeStringsDiv_1 = document.getElementById("stringsCode_1");
let outcomeStringsDiv_1 = document.getElementById("stringsOutput_1");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_1 =
`<pre><code>
let testOne = 2;
let testTwo = "2";

function compare(test_1, test_2) {
  return test_1 >= test_2;
};
let outcome = compare(testOne, testTwo);
</code></pre>`;

codeStringsDiv_1.innerHTML = codeStringsExample_1;

// Runs the function and adds the answer to the html page. -------
let testOneEx1 = 2;
let testTwoEx1 = "2";

function compare(test_1, test_2) {
  return test_1 >= test_2;
};

let outcomeStrings_1 = compare(testOneEx1, testTwoEx1);
outcomeStringsDiv_1.innerHTML = `outcome: <code>${outcomeStrings_1}</code>`;
