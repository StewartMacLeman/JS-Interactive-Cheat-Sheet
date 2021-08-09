"use strict";

// Objects:  --------------------------------------------------------
let codeObjectsDiv_1 = document.getElementById("objectsCode_1");
let outcomeObjectsDiv_1 = document.getElementById("objectsOutput_1");

// Adds the example code to the html page. ----------------------------
let codeObjectsExample_1 =
`<pre><code>
let testOne = 2;
let testTwo = "2";

function compare(test_1, test_2) {
  return test_1 >= test_2;
};
let outcome = compare(testOne, testTwo);
</code></pre>`;

codeObjectsDiv_1.innerHTML = codeObjectsExample_1;

// Runs the function and adds the answer to the html page. -------
let testOneEx1 = 2;
let testTwoEx1 = "2";

function compare(test_1, test_2) {
  return test_1 >= test_2;
};

let outcomeObjects_1 = compare(testOneEx1, testTwoEx1);
outcomeObjectsDiv_1.innerHTML = `outcome: <code>${outcomeObjects_1}</code>`;
