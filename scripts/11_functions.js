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
let funcEx = function(){
  return "Hello!";
};
let outcome = funcEx();
</code></pre>`;

codeFunctionsDiv_2.innerHTML = codeFunctionsExample_2;

// Runs the function and adds the answer to the html page. -------
let funcExV1 = function(){
  return "Hello!";
};

let outcomeFunctions_2 = funcExV1();
outcomeFunctionsDiv_2.innerHTML = `outcome: <code>${outcomeFunctions_2}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: Default Parameters ---------------------------------------
let codeFunctionsDiv_3 = document.getElementById("functionsCode_3");
let outcomeFunctionsDiv_3 = document.getElementById("functionsOutput_3");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_3 =
`<pre><code>
let funcEx = function (name="Bobby") {
  return \`Hello \${name}!\`;
};
let outcome = funcEx();
// No arguments provided!
</code></pre>`;

codeFunctionsDiv_3.innerHTML = codeFunctionsExample_3;

// Runs the function and adds the answer to the html page. -------
let funcExV2 = function (name="Bobby") {
  return `Hello ${name}!`
};

let outcomeFunctions_3 = funcExV2();
outcomeFunctionsDiv_3.innerHTML = `outcome: <code>${outcomeFunctions_3}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: Default Parameters ---------------------------------------
let codeFunctionsDiv_4 = document.getElementById("functionsCode_4");
let outcomeFunctionsDiv_4 = document.getElementById("functionsOutput_4");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_4 =
`<pre><code>
let funcEx = function (name="Bobby") {
  return \`Hello \${name}!\`;
};
let outcome = funcEx("Mary");
// Arguments provided!
</code></pre>`;

codeFunctionsDiv_4.innerHTML = codeFunctionsExample_4;

// Runs the function and adds the answer to the html page. -------
let funcExV4 = function (name="Bobby") {
  return `Hello ${name}!`;
};

let outcomeFunctions_4 = funcExV4("Mary");
outcomeFunctionsDiv_4.innerHTML = `outcome: <code>${outcomeFunctions_4}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: Arrow Functions -===--------------------------------------
let codeFunctionsDiv_5 = document.getElementById("functionsCode_5");
let outcomeFunctionsDiv_5 = document.getElementById("functionsOutput_5");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_5 =
`<pre><code>
let funcEx = (greeting, name) => {
  return \`\${greeting} \${name}!\`;
};
let outcome = funcEx("Morning", "Mary");
</code></pre>`;

codeFunctionsDiv_5.innerHTML = codeFunctionsExample_5;

// Runs the function and adds the answer to the html page. -------
let funcExV5 = (greeting, name) => {
  return `${greeting} ${name}!`;
};

let outcomeFunctions_5 = funcExV5("Morning", "Mary");
outcomeFunctionsDiv_5.innerHTML = `outcome: <code>${outcomeFunctions_5}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: Arrow Functions -===--------------------------------------
let codeFunctionsDiv_6 = document.getElementById("functionsCode_6");
let outcomeFunctionsDiv_6 = document.getElementById("functionsOutput_6");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_6 =
`<pre><code>
let funcEx = (greeting, name) => \`\${greeting} \${name}!\`;

let outcome = funcEx("Hello", "Bobby");
</code></pre>`;

codeFunctionsDiv_6.innerHTML = codeFunctionsExample_6;

// Runs the function and adds the answer to the html page. -------
let funcExV6 = (greeting, name) => `${greeting} ${name}!`;

let outcomeFunctions_6 = funcExV6("Hello", "Bobby");
outcomeFunctionsDiv_6.innerHTML = `outcome: <code>${outcomeFunctions_6}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: Arrow Functions -===--------------------------------------
let codeFunctionsDiv_7 = document.getElementById("functionsCode_7");
let outcomeFunctionsDiv_7 = document.getElementById("functionsOutput_7");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_7 =
`<pre><code>
let funcEx = (name) => \`Hello \${name}!\`;

let outcome = funcEx("Mary");
</code></pre>`;

codeFunctionsDiv_7.innerHTML = codeFunctionsExample_7;

// Runs the function and adds the answer to the html page. -------
let funcExV7 = (name) => `Hello ${name}!`;

let outcomeFunctions_7 = funcExV7("Mary");
outcomeFunctionsDiv_7.innerHTML = `outcome: <code>${outcomeFunctions_7}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: Arrow Functions -===--------------------------------------
let codeFunctionsDiv_8 = document.getElementById("functionsCode_8");
let outcomeFunctionsDiv_8 = document.getElementById("functionsOutput_8");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_8 =
`<pre><code>
let funcEx = name => \`Hello \${name}!\`;

let outcome = funcEx("Bobby");
</code></pre>`;

codeFunctionsDiv_8.innerHTML = codeFunctionsExample_8;

// Runs the function and adds the answer to the html page. -------
let funcExV8 = name => `Hello ${name}!`;

let outcomeFunctions_8 = funcExV8("Bobby");
outcomeFunctionsDiv_8.innerHTML = `outcome: <code>${outcomeFunctions_8}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: Arrow Functions -===--------------------------------------
let codeFunctionsDiv_9 = document.getElementById("functionsCode_9");
let outcomeFunctionsDiv_9 = document.getElementById("functionsOutput_9");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_9 =
`<pre><code>
let funcEx = () => \`Hello!\`;

let outcome = funcEx();
</code></pre>`;

codeFunctionsDiv_9.innerHTML = codeFunctionsExample_9;

// Runs the function and adds the answer to the html page. -------
let funcExV9 = () => `Hello!`;

let outcomeFunctions_9 = funcExV9();
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

// Functions: call() V1  -----------------------------------------------
let codeFunctionsDiv_11 = document.getElementById("functionsCode_11");
let outcomeFunctionsDiv_11 = document.getElementById("functionsOutput_11");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_11 =
`<pre><code>
let varOne = {
  width: 2,
  height: 3
};

function funcEx() {
  let area = this.width * this.height;
  return area;
};
let outcome = funcEx.call(varOne);
</code></pre>`;

codeFunctionsDiv_11.innerHTML = codeFunctionsExample_11;

// Runs the function and adds the answer to the html page. -------
let varOneEx11 = {
  width: 2,
  height: 3
};

function funcExV11() {
  let area = this.width * this.height;
  return area;
};

let outcomeFunctions_11 = funcExV11.call(varOneEx11);
outcomeFunctionsDiv_11.innerHTML = `outcome: <code>${outcomeFunctions_11}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: call() V2  -----------------------------------------------
let codeFunctionsDiv_12 = document.getElementById("functionsCode_12");
let outcomeFunctionsDiv_12 = document.getElementById("functionsOutput_12");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_12 =
`<pre><code>
let varOne = {
  width: 2,
  height: 3
};

function funcEx(price) {
  let area = this.width * this.height;
  let totalCost = area * price;
  return totalCost;
};
let outcome = funcEx.call(varOne, 2);
</code></pre>`;

codeFunctionsDiv_12.innerHTML = codeFunctionsExample_12;

// Runs the function and adds the answer to the html page. -------
let varOneEx12 = {
  width: 2,
  height: 3
};

function funcExV12(price) {
  let area = this.width * this.height;
  let totalCost = area * price;
  return totalCost;
};

let outcomeFunctions_12 = funcExV12.call(varOneEx12, 2);
outcomeFunctionsDiv_12.innerHTML = `outcome: <code>${outcomeFunctions_12}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: apply() V1  -----------------------------------------------
let codeFunctionsDiv_13 = document.getElementById("functionsCode_13");
let outcomeFunctionsDiv_13 = document.getElementById("functionsOutput_13");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_13 =
`<pre><code>
let varOne = {
  width: 2,
  height: 3
};

function funcEx() {
  let area = this.width * this.height;
  return area;
};
let outcome = funcEx.apply(varOne);
</code></pre>`;

codeFunctionsDiv_13.innerHTML = codeFunctionsExample_13;

// Runs the function and adds the answer to the html page. -------
let varOneEx13 = {
  width: 2,
  height: 3
};

function funcExV13() {
  let area = this.width * this.height;
  return area;
};

let outcomeFunctions_13 = funcExV13.apply(varOneEx13);
outcomeFunctionsDiv_13.innerHTML = `outcome: <code>${outcomeFunctions_13}</code>`;
// /////////////////////////////////////////////////////////////////////////////

// Functions: apply() V2  -----------------------------------------------
let codeFunctionsDiv_14 = document.getElementById("functionsCode_14");
let outcomeFunctionsDiv_14 = document.getElementById("functionsOutput_14");

// Adds the example code to the html page. ----------------------------
let codeFunctionsExample_14 =
`<pre><code>
let varOne = {
  width: 2,
  height: 3
};
let varTwo = [2, 1.25];

function funcEx(price, tax) {
  let area = this.width * this.height;
  let totalCost = area * price * tax;
  return totalCost;
};
let outcome = funcEx.apply(varOne, ...varTwo);
// Using the Spread Operator!
</code></pre>`;

codeFunctionsDiv_14.innerHTML = codeFunctionsExample_14;

// Runs the function and adds the answer to the html page. -------
let varOneEx14 = {
  width: 2,
  height: 3
};
let costs = [2, 1.25];

function funcExV14(price, tax) {
  let area = this.width * this.height;
  let totalCost = area * price * tax;
  return totalCost;
};

let outcomeFunctions_14 = funcExV14.call(varOneEx12, ...costs);
outcomeFunctionsDiv_14.innerHTML = `outcome: <code>${outcomeFunctions_14}</code>`;
// /////////////////////////////////////////////////////////////////////////////
