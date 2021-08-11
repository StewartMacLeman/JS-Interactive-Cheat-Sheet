"use strict";

// Functions: Declarative / Named -----------------------------------------
let codeFunctionsDiv_1 = document.getElementById("functionsCode_1");
let outcomeFunctionsDiv_1 = document.getElementById("functionsOutput_1");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_1 =
`<pre><code>
let varOne = 2;
let varTwo = "2";

function compare(var_1, var_2) {
  return var_1 >= var_2;
};
let outcome = compare(varOne, varTwo);
</code></pre>`;

codeFunctionsDiv_1.innerHTML = codeFunctionsExample_1;

// Runs the function and adds the answer to the html page. -------
let varOneEx1 = 2;
let varTwoEx1 = "2";

function compareV1(var_1, var_2) {
  return var_1 >= var_2;
};

let outcomeFunctions_1 = compareV1(varOneEx1, varTwoEx1);
outcomeFunctionsDiv_1.innerHTML = `outcome: <code>${outcomeFunctions_1}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: Expressions / Anonymous -----------------------------------------
let codeFunctionsDiv_2 = document.getElementById("functionsCode_2");
let outcomeFunctionsDiv_2 = document.getElementById("functionsOutput_2");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_2 =
`<pre><code>
let funcVar = function () {
  return "Hello!";
};
let outcome = funcVar();
</code></pre>`;

codeFunctionsDiv_2.innerHTML = codeFunctionsExample_2;

// Runs the function and adds the answer to the html page. -------
let funcVarV1 = function () {
  return "Hello!";
};

let outcomeFunctions_2 = funcVarV1();
outcomeFunctionsDiv_2.innerHTML = `outcome: <code>${outcomeFunctions_2}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: Default Parameters ---------------------------------------
let codeFunctionsDiv_3 = document.getElementById("functionsCode_3");
let outcomeFunctionsDiv_3 = document.getElementById("functionsOutput_3");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_3 =
`<pre><code>
let funcVar = function (name="Bobby") {
  return \`Hello \${name}!\`;
};
let outcome = funcVar();
// No arguments provided!
</code></pre>`;

codeFunctionsDiv_3.innerHTML = codeFunctionsExample_3;

// Runs the function and adds the answer to the html page. -------
let funcVarV2 = function (name="Bobby") {
  return `Hello ${name}!`
};

let outcomeFunctions_3 = funcVarV2();
outcomeFunctionsDiv_3.innerHTML = `outcome: <code>${outcomeFunctions_3}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: Default Parameters ---------------------------------------
let codeFunctionsDiv_4 = document.getElementById("functionsCode_4");
let outcomeFunctionsDiv_4 = document.getElementById("functionsOutput_4");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_4 =
`<pre><code>
let funcVar = function (name="Bobby") {
  return \`Hello \${name}!\`;
};
let outcome = funcVar("Mary");
// Arguments provided!
</code></pre>`;

codeFunctionsDiv_4.innerHTML = codeFunctionsExample_4;

// Runs the function and adds the answer to the html page. -------
let funcVarV4 = function (name="Bobby") {
  return `Hello ${name}!`;
};

let outcomeFunctions_4 = funcVarV4("Mary");
outcomeFunctionsDiv_4.innerHTML = `outcome: <code>${outcomeFunctions_4}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: Arrow Functions -===--------------------------------------
let codeFunctionsDiv_5 = document.getElementById("functionsCode_5");
let outcomeFunctionsDiv_5 = document.getElementById("functionsOutput_5");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_5 =
`<pre><code>
let funcVar = (greeting, name) => {
  return \`\${greeting} \${name}!\`;
};
let outcome = funcVar("Morning", "Mary");
</code></pre>`;

codeFunctionsDiv_5.innerHTML = codeFunctionsExample_5;

// Runs the function and adds the answer to the html page. -------
let funcVarV5 = (greeting, name) => {
  return `${greeting} ${name}!`;
};

let outcomeFunctions_5 = funcVarV5("Morning", "Mary");
outcomeFunctionsDiv_5.innerHTML = `outcome: <code>${outcomeFunctions_5}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: Arrow Functions -===--------------------------------------
let codeFunctionsDiv_6 = document.getElementById("functionsCode_6");
let outcomeFunctionsDiv_6 = document.getElementById("functionsOutput_6");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_6 =
`<pre><code>
let funcVar = (greeting, name) => \`\${greeting} \${name}!\`;

let outcome = funcVar("Hello", "Bobby");
</code></pre>`;

codeFunctionsDiv_6.innerHTML = codeFunctionsExample_6;

// Runs the function and adds the answer to the html page. -------
let funcVarV6 = (greeting, name) => `${greeting} ${name}!`;

let outcomeFunctions_6 = funcVarV6("Hello", "Bobby");
outcomeFunctionsDiv_6.innerHTML = `outcome: <code>${outcomeFunctions_6}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: Arrow Functions -===--------------------------------------
let codeFunctionsDiv_7 = document.getElementById("functionsCode_7");
let outcomeFunctionsDiv_7 = document.getElementById("functionsOutput_7");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_7 =
`<pre><code>
let funcVar = (name) => \`Hello \${name}!\`;

let outcome = funcVar("Mary");
</code></pre>`;

codeFunctionsDiv_7.innerHTML = codeFunctionsExample_7;

// Runs the function and adds the answer to the html page. -------
let funcVarV7 = (name) => `Hello ${name}!`;

let outcomeFunctions_7 = funcVarV7("Mary");
outcomeFunctionsDiv_7.innerHTML = `outcome: <code>${outcomeFunctions_7}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: Arrow Functions -===--------------------------------------
let codeFunctionsDiv_8 = document.getElementById("functionsCode_8");
let outcomeFunctionsDiv_8 = document.getElementById("functionsOutput_8");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_8 =
`<pre><code>
let funcVar = name => \`Hello \${name}!\`;

let outcome = funcVar("Bobby");
</code></pre>`;

codeFunctionsDiv_8.innerHTML = codeFunctionsExample_8;

// Runs the function and adds the answer to the html page. -------
let funcVarV8 = name => `Hello ${name}!`;

let outcomeFunctions_8 = funcVarV8("Bobby");
outcomeFunctionsDiv_8.innerHTML = `outcome: <code>${outcomeFunctions_8}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: Arrow Functions -===--------------------------------------
let codeFunctionsDiv_9 = document.getElementById("functionsCode_9");
let outcomeFunctionsDiv_9 = document.getElementById("functionsOutput_9");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_9 =
`<pre><code>
let funcVar = () => \`Hello!\`;

let outcome = funcVar();
</code></pre>`;

codeFunctionsDiv_9.innerHTML = codeFunctionsExample_9;

// Runs the function and adds the answer to the html page. -------
let funcVarV9 = () => `Hello!`;

let outcomeFunctions_9 = funcVarV9();
outcomeFunctionsDiv_9.innerHTML = `outcome: <code>${outcomeFunctions_9}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: IIFE ----------------------------------------------------
let codeFunctionsDiv_10 = document.getElementById("functionsCode_10");
let outcomeFunctionsDiv_10 = document.getElementById("functionsOutput_10");
let outcomeFunctionsDiv_10b = document.getElementById("functionsOutput_10b");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_10 =
`<pre><code>
let outcome = (() => \`Hello!\`)();
</code></pre>`;

codeFunctionsDiv_10.innerHTML = codeFunctionsExample_10;

// Runs the function and adds the answer to the html page. -------

let outcomeFunctions_10 = (() => `Hello!`)();
outcomeFunctionsDiv_10.innerHTML = `outcome: <code>${outcomeFunctions_10}</code>`;
outcomeFunctionsDiv_10b.innerHTML = `IIFE: Immediately Invoked Function Expression`;
// /////////////////////////////////////////////////////////////////////////////
