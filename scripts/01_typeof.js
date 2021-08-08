"use strict";

// Typeof: Strings. ---------------------------------------------------
let codeTypeofDiv_1 = document.getElementById("typeofCode_1");
let outcomeTypeofDiv_1 = document.getElementById("typeofOutput_1");

// Adds the example code to the html page. ----------------------------
let codeTypeofExample_1 =
`<pre><code>
let name = "Bobby";

function whatIsTheType(variable) {
  return <b>typeof</b> variable;
};
let outcome = whatIsTheType(name);
</code></pre>`;

codeTypeofDiv_1.innerHTML = codeTypeofExample_1;

// Runs the function and adds the answer to the html page. -------
let nameString = "Bobby";

function whatIsTheType(variable) {
  return typeof variable;
};

let outcomeTypeof_1 = whatIsTheType(nameString);
outcomeTypeofDiv_1.innerHTML = `outcome: <code>${outcomeTypeof_1}</code>`;
// /////////////////////////////////////////////////////////////////////

// Typeof: Numbers. ---------------------------------------------------
let codeTypeofDiv_2 = document.getElementById("typeofCode_2");
let outcomeTypeofDiv_2 = document.getElementById("typeofOutput_2");

// Adds the example code to the html page. ----------------------------
let codeTypeofExample_2 =
`<pre><code>
let age = 55;

function whatIsTheType(variable) {
  return <b>typeof</b> variable;
};
let outcome = whatIsTheType(age);
</code></pre>`;

codeTypeofDiv_2.innerHTML = codeTypeofExample_2;

// Runs the function and adds the answer to the html page. -------
let ageNumber = 55;
// Refer to the "whatIsTheType" function above.
let outcomeTypeof_2 = whatIsTheType(ageNumber);
outcomeTypeofDiv_2.innerHTML = `outcome: <code>${outcomeTypeof_2}</code>`;
// /////////////////////////////////////////////////////////////////////

// Typeof: Booleans. ---------------------------------------------------
let codeTypeofDiv_3 = document.getElementById("typeofCode_3");
let outcomeTypeofDiv_3 = document.getElementById("typeofOutput_3");

// Adds the example code to the html page. ----------------------------
let codeTypeofExample_3 =
`<pre><code>
let funLoving = true;

function whatIsTheType(variable) {
  return <b>typeof</b> variable;
};
let outcome = whatIsTheType(funLoving);
</code></pre>`;

codeTypeofDiv_3.innerHTML = codeTypeofExample_3;

// Runs the function and adds the answer to the html page. -------
let funLovingBool = true;
// Refer to the "whatIsTheType" function above.
let outcomeTypeof_3 = whatIsTheType(funLovingBool);
outcomeTypeofDiv_3.innerHTML = `outcome: <code>${outcomeTypeof_3}</code>`;
// /////////////////////////////////////////////////////////////////////

// Typeof: Null. ---------------------------------------------------
let codeTypeofDiv_4 = document.getElementById("typeofCode_4");
let outcomeTypeofDiv_4 = document.getElementById("typeofOutput_4");

// Adds the example code to the html page. ----------------------------
let codeTypeofExample_4 =
`<pre><code>
let capacity = null;

function whatIsTheType(variable) {
  return <b>typeof</b> variable;
};
let outcome = whatIsTheType(capacity);
</code></pre>`;

codeTypeofDiv_4.innerHTML = codeTypeofExample_4;

// Runs the function and adds the answer to the html page. -------
let capacityNull = null;
// Refer to the "whatIsTheType" function above.
let outcomeTypeof_4 = whatIsTheType(capacityNull);
outcomeTypeofDiv_4.innerHTML = `outcome: <code><b>${outcomeTypeof_4}</b></code>`;
// /////////////////////////////////////////////////////////////////////

// Typeof: Undefined. ---------------------------------------------------
let codeTypeofDiv_5 = document.getElementById("typeofCode_5");
let outcomeTypeofDiv_5 = document.getElementById("typeofOutput_5");

// Adds the example code to the html page. ----------------------------
let codeTypeofExample_5 =
`<pre><code>
let start = undefined;

function whatIsTheType(variable) {
  return <b>typeof</b> variable;
};
let outcome = whatIsTheType(start);
</code></pre>`;

codeTypeofDiv_5.innerHTML = codeTypeofExample_5;

// Runs the function and adds the answer to the html page. -------
let startUndef = undefined;
// Refer to the "whatIsTheType" function above.
let outcomeTypeof_5 = whatIsTheType(startUndef);
outcomeTypeofDiv_5.innerHTML = `outcome: <code>${outcomeTypeof_5}</code>`;
// /////////////////////////////////////////////////////////////////////

// Typeof: Objects. ---------------------------------------------------
let codeTypeofDiv_6 = document.getElementById("typeofCode_6");
let outcomeTypeofDiv_6 = document.getElementById("typeofOutput_6");

// Adds the example code to the html page. ----------------------------
let codeTypeofExample_6 =
`<pre><code>
let personInfo = { name: "Bobby", age: 55 };

function whatIsTheType(variable) {
  return <b>typeof</b> variable;
};
let outcome = whatIsTheType(personInfo);
</code></pre>`;

codeTypeofDiv_6.innerHTML = codeTypeofExample_6;

// Runs the function and adds the answer to the html page. -------
let personInfoObject = { name: "Bobby", age: 55 };
// Refer to the "whatIsTheType" function above.
let outcomeTypeof_6 = whatIsTheType(personInfoObject);
outcomeTypeofDiv_6.innerHTML = `outcome: <code>${outcomeTypeof_6}</code>`;
// /////////////////////////////////////////////////////////////////////

// Typeof: Arrays. ---------------------------------------------------
let codeTypeofDiv_7 = document.getElementById("typeofCode_7");
let outcomeTypeofDiv_7 = document.getElementById("typeofOutput_7");

// Adds the example code to the html page. ----------------------------
let codeTypeofExample_7 =
`<pre><code>
let colours = ["blue", "green", "yellow", "orange"];

function whatIsTheType(variable) {
  return <b>typeof</b> variable;
};
let outcome = whatIsTheType(colours);
</code></pre>`;

codeTypeofDiv_7.innerHTML = codeTypeofExample_7;

// Runs the function and adds the answer to the html page. -------
let coloursArray = ["blue", "green", "yellow", "orange"];
// Refer to the "whatIsTheType" function above.
let outcomeTypeof_7 = whatIsTheType(coloursArray);
outcomeTypeofDiv_7.innerHTML = `outcome: <code><b>${outcomeTypeof_7}</b></code>`;
// /////////////////////////////////////////////////////////////////////
// Typeof: Symbols. ---------------------------------------------------
let codeTypeofDiv_8 = document.getElementById("typeofCode_8");
let outcomeTypeofDiv_8 = document.getElementById("typeofOutput_8");

// Adds the example code to the html page. ----------------------------
let codeTypeofExample_8 =
`<pre><code>
let name = Symbol();

function whatIsTheType(variable) {
  return <b>typeof</b> variable;
};
let outcome = whatIsTheType(name);
</code></pre>`;

codeTypeofDiv_8.innerHTML = codeTypeofExample_8;

// Runs the function and adds the answer to the html page. -------
let nameSymbol = Symbol();
// Refer to the "whatIsTheType" function above.
let outcomeTypeof_8 = whatIsTheType(nameSymbol);
outcomeTypeofDiv_8.innerHTML = `outcome: <code>${outcomeTypeof_8}</code>`;
// /////////////////////////////////////////////////////////////////////
