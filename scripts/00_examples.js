"use strict";

// Test Example 1. ---------------------------------------------------
let codeDiv_1 = document.getElementById("codeTestID_1");
let outcomeDiv_1 = document.getElementById("ocTest_1");

// Adds the example code to the html page. ----------------------------
let codeExample_1 =
`<pre><code>
let c = 50;
let d = 60;

function add() {
  return c + d;
};
let outcome = add();
</code></pre>`;

codeDiv_1.innerHTML = codeExample_1;

// Runs the function and adds the answer to the html page. -------
  let c_1 = 50;
  let d_1 = 60;

  function add() {
    return c_1 + d_1;
  };

let outcome_1 = add();
outcomeDiv_1.innerHTML = `outcome: <code>${outcome_1}</code>`;
// /////////////////////////////////////////////////////////////////////
// Test Example 2. ---------------------------------------------------
let codeDiv_2 = document.getElementById("codeTestID_2");
let outcomeDiv_2 = document.getElementById("ocTest_2");

// Adds the example code to the html page. ----------------------------
let codeExample_2 =
`<pre><code>
let name = "Stewart";
let language = "JavaScript";
let emotion = "Joy!";
name = "John";

function message(){
  return name + " is studying " + language + ", which brings him " + emotion;
};
let outcome = message();
</code></pre>`;

codeDiv_2.innerHTML = codeExample_2;

// Runs the function and adds the answer to the html page. -------
let name = "Stewart";
let language = "JavaScript";
let emotion = "Joy!";
name = "John";

function message(){
  return name + " is studying " + language + ", which brings him " + emotion;
};


let outcome_2 = message();
outcomeDiv_2.innerHTML = `outcome: <code>${outcome_2}</code>`;
// /////////////////////////////////////////////////////////////////////
