"use strict";

// Dates:  --------------------------------------------------------
let codeDatesDiv_1 = document.getElementById("datesCode_1");
let outcomeDatesDiv_1 = document.getElementById("datesOutput_1");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_1 =
`<pre><code>
let testOne = 2;
let testTwo = "2";

function compare(test_1, test_2) {
  return test_1 >= test_2;
};
let outcome = compare(testOne, testTwo);
</code></pre>`;

codeDatesDiv_1.innerHTML = codeDatesExample_1;

// Runs the function and adds the answer to the html page. -------
let testOneEx1 = 2;
let testTwoEx1 = "2";

function compare(test_1, test_2) {
  return test_1 >= test_2;
};

let outcomeDates_1 = compare(testOneEx1, testTwoEx1);
outcomeDatesDiv_1.innerHTML = `outcome: <code>${outcomeDates_1}</code>`;
