"use strict";

// Comparison Operators: >= -------------------------------------------
let codeCompOpDiv_1 = document.getElementById("compOpCode_1");
let outcomeCompOpDiv_1 = document.getElementById("compOpOutput_1");

// Adds the example code to the html page. ----------------------------
let codeCompOpExample_1 =
`<pre><code>
let compOne = 2;
let compTwo = "2";

function compare(comp_1, comp_2) {
  return comp_1 >= comp_2;
};
let outcome = compare(compOne, compTwo);
</code></pre>`;

codeCompOpDiv_1.innerHTML = codeCompOpExample_1;

// Runs the function and adds the answer to the html page. -------
let compOneEx1 = 2;
let compTwoEx1 = "2";

function compare(comp_1, comp_2) {
  return comp_1 >= comp_2;
};

let outcomeCompOp_1 = compare(compOneEx1, compTwoEx1);
outcomeCompOpDiv_1.innerHTML = `outcome: <code>${outcomeCompOp_1}</code>`;
// /////////////////////////////////////////////////////////////////////

// Comparison Operators: == -------------------------------------------
let codeCompOpDiv_2 = document.getElementById("compOpCode_2");
let outcomeCompOpDiv_2 = document.getElementById("compOpOutput_2");

// Adds the example code to the html page. ----------------------------
let codeCompOpExample_2 =
`<pre><code>
let compOne = 2;
let compTwo = "2";

function compare(comp_1, comp_2) {
  return comp_1 == comp_2;
};
let outcome = compare(compOne, compTwo);
</code></pre>`;

codeCompOpDiv_2.innerHTML = codeCompOpExample_2;

// Runs the function and adds the answer to the html page. -------
let compOneEx2 = 2;
let compTwoEx2 = "2";

function compareV2(comp_1, comp_2) {
  return comp_1 == comp_2;
};

let outcomeCompOp_2 = compareV2(compOneEx2, compTwoEx2);
outcomeCompOpDiv_2.innerHTML = `outcome: <code>${outcomeCompOp_2}</code>`;
// /////////////////////////////////////////////////////////////////////

// Comparison Operators: === -------------------------------------------
let codeCompOpDiv_3 = document.getElementById("compOpCode_3");
let outcomeCompOpDiv_3 = document.getElementById("compOpOutput_3");

// Adds the example code to the html page. ----------------------------
let codeCompOpExample_3 =
`<pre><code>
let compOne = 2;
let compTwo = "2";

function compare(comp_1, comp_2) {
  return comp_1 === comp_2;
};
let outcome = compare(compOne, compTwo);
</code></pre>`;

codeCompOpDiv_3.innerHTML = codeCompOpExample_3;

// Runs the function and adds the answer to the html page. -------
let compOneEx3 = 2;
let compTwoEx3 = "2";

function compareV3(comp_1, comp_2) {
  return comp_1 === comp_2;
};

let outcomeCompOp_3 = compareV3(compOneEx3, compTwoEx3);
outcomeCompOpDiv_3.innerHTML = `outcome: <code>${outcomeCompOp_3}</code>`;
// /////////////////////////////////////////////////////////////////////

// Comparison Operators: != V1-------------------------------------------
let codeCompOpDiv_4 = document.getElementById("compOpCode_4");
let outcomeCompOpDiv_4 = document.getElementById("compOpOutput_4");

// Adds the example code to the html page. ----------------------------
let codeCompOpExample_4 =
`<pre><code>
let compOne = 2;
let compTwo = 3;

function compare(comp_1, comp_2) {
  return comp_1 != comp_2;
};
let outcome = compare(compOne, compTwo);
</code></pre>`;

codeCompOpDiv_4.innerHTML = codeCompOpExample_4;

// Runs the function and adds the answer to the html page. -------
let compOneEx4 = 2;
let compTwoEx4 = 3;

function compareV4(comp_1, comp_2) {
  return comp_1 != comp_2;
};

let outcomeCompOp_4 = compareV4(compOneEx4, compTwoEx4);
outcomeCompOpDiv_4.innerHTML = `outcome: <code>${outcomeCompOp_4}</code>`;
// /////////////////////////////////////////////////////////////////////

// Comparison Operators: != V2 -------------------------------------------
let codeCompOpDiv_5 = document.getElementById("compOpCode_5");
let outcomeCompOpDiv_5 = document.getElementById("compOpOutput_5");

// Adds the example code to the html page. ----------------------------
let codeCompOpExample_5 =
`<pre><code>
let compOne = 2;
let compTwo = 2;

function compare(comp_1, comp_2) {
  return comp_1 != comp_2;
};
let outcome = compare(compOne, compTwo);
</code></pre>`;

codeCompOpDiv_5.innerHTML = codeCompOpExample_5;

// Runs the function and adds the answer to the html page. -------
let compOneEx5 = 2;
let compTwoEx5 = 2;

function compareV5(comp_1, comp_2) {
  return comp_1 != comp_2;
};

let outcomeCompOp_5 = compareV5(compOneEx5, compTwoEx5);
outcomeCompOpDiv_5.innerHTML = `outcome: <code>${outcomeCompOp_5}</code>`;
// /////////////////////////////////////////////////////////////////////

// Comparison Operators: != V3 -------------------------------------------
let codeCompOpDiv_6 = document.getElementById("compOpCode_6");
let outcomeCompOpDiv_6 = document.getElementById("compOpOutput_6");

// Adds the example code to the html page. ----------------------------
let codeCompOpExample_6 =
`<pre><code>
let compOne = 2;
let compTwo = "2";

function compare(comp_1, comp_2) {
  return comp_1 != comp_2;
};
let outcome = compare(compOne, compTwo);
</code></pre>`;

codeCompOpDiv_6.innerHTML = codeCompOpExample_6;

// Runs the function and adds the answer to the html page. -------
let compOneEx6 = 2;
let compTwoEx6 = "2";

function compareV6(comp_1, comp_2) {
  return comp_1 != comp_2;
};

let outcomeCompOp_6 = compareV6(compOneEx6, compTwoEx6);
outcomeCompOpDiv_6.innerHTML = `outcome: <code>${outcomeCompOp_6}</code>`;
// /////////////////////////////////////////////////////////////////////

// Comparison Operators: !== ---------------------------------------------
let codeCompOpDiv_7 = document.getElementById("compOpCode_7");
let outcomeCompOpDiv_7 = document.getElementById("compOpOutput_7");

// Adds the example code to the html page. ----------------------------
let codeCompOpExample_7 =
`<pre><code>
let compOne = 2;
let compTwo = "2";

function compare(comp_1, comp_2) {
  return comp_1 !== comp_2;
};
let outcome = compare(compOne, compTwo);
</code></pre>`;

codeCompOpDiv_7.innerHTML = codeCompOpExample_7;

// Runs the function and adds the answer to the html page. -------
let compOneEx7 = 2;
let compTwoEx7 = "2";

function compareV7(comp_1, comp_2) {
  return comp_1 !== comp_2;
};

let outcomeCompOp_7 = compareV7(compOneEx7, compTwoEx7);
outcomeCompOpDiv_7.innerHTML = `outcome: <code>${outcomeCompOp_7}</code>`;
// /////////////////////////////////////////////////////////////////////
