"use strict";

// Strings: length V1 ---------------------------------------------------
let codeStringsDiv_1 = document.getElementById("stringsCode_1");
let outcomeStringsDiv_1 = document.getElementById("stringsOutput_1");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_1 =
`<pre><code>
let varOne = "hello";

function stringFunc(string_1) {
  return string_1.length;
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_1.innerHTML = codeStringsExample_1;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx1 = "hello";

function stringFuncV1(string_1) {
  return string_1.length;
};

let outcomeStrings_1 = stringFuncV1(stringsOneEx1);
outcomeStringsDiv_1.innerHTML = `outcome: <code>${outcomeStrings_1}</code>`;
// ///////////////////////////////////////////////////////////////////////////

// Strings: length V2 --------------------------------------------------
let codeStringsDiv_2 = document.getElementById("stringsCode_2");
let outcomeStringsDiv_2 = document.getElementById("stringsOutput_2");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_2 =
`<pre><code>
let varOne = "hello";

function stringFunc(string_1) {
  return string_1[string_1.length];
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_2.innerHTML = codeStringsExample_2;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx2 = "hello";

function stringFuncV2(string_1) {
  return string_1[string_1.length];
};

let outcomeStrings_2 = stringFuncV2(stringsOneEx2);
outcomeStringsDiv_2.innerHTML = `outcome: <code>${outcomeStrings_2}</code>`;
// ///////////////////////////////////////////////////////////////////////////

// Strings: length V3 --------------------------------------------------
let codeStringsDiv_3 = document.getElementById("stringsCode_3");
let outcomeStringsDiv_3 = document.getElementById("stringsOutput_3");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_3 =
`<pre><code>
let varOne = "hello";

function stringFunc(string_1) {
  return string_1[string_1.length-1];
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_3.innerHTML = codeStringsExample_3;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx3 = "hello";

function stringFuncV3(string_1) {
  return string_1[string_1.length-1];
};

let outcomeStrings_3 = stringFuncV3(stringsOneEx3);
outcomeStringsDiv_3.innerHTML = `outcome: <code>${outcomeStrings_3}</code>`;
// ///////////////////////////////////////////////////////////////////////////

// Strings: indenxOf() V1 -----------------------------------------------
let codeStringsDiv_4 = document.getElementById("stringsCode_4");
let outcomeStringsDiv_4 = document.getElementById("stringsOutput_4");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_4 =
`<pre><code>
let varOne = "hello";

function stringFunc(string_1) {
  return string_1.indexOf("e");
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_4.innerHTML = codeStringsExample_4;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx4 = "hello";

function stringFuncV4(string_1) {
  return string_1.indexOf("e");
};

let outcomeStrings_4 = stringFuncV4(stringsOneEx4);
outcomeStringsDiv_4.innerHTML = `outcome: <code>${outcomeStrings_4}</code>`;
// ///////////////////////////////////////////////////////////////////////////

// Strings: indenxOf() V2 ----------------------------------------------
let codeStringsDiv_5 = document.getElementById("stringsCode_5");
let outcomeStringsDiv_5 = document.getElementById("stringsOutput_5");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_5 =
`<pre><code>
let varOne = "hello";

function stringFunc(string_1) {
  return string_1.indexOf("f");
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_5.innerHTML = codeStringsExample_5;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx5 = "hello";

function stringFuncV5(string_1) {
  return string_1.indexOf("f");
};

let outcomeStrings_5 = stringFuncV5(stringsOneEx5);
outcomeStringsDiv_5.innerHTML = `outcome: <code>${outcomeStrings_5}</code>`;
// ///////////////////////////////////////////////////////////////////////////

// Strings: slice() V1 ------------------------------------------------
let codeStringsDiv_6 = document.getElementById("stringsCode_6");
let outcomeStringsDiv_6 = document.getElementById("stringsOutput_6");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_6 =
`<pre><code>
let varOne = "hello";

function stringFunc(string_1) {
  return string_1.slice(1);
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_6.innerHTML = codeStringsExample_6;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx6 = "hello";

function stringFuncV6(string_1) {
  return string_1.slice(1);
};

let outcomeStrings_6 = stringFuncV6(stringsOneEx6);
outcomeStringsDiv_6.innerHTML = `outcome: <code>${outcomeStrings_6}</code>`;
// ///////////////////////////////////////////////////////////////////////////

// Strings: slice() V2 ------------------------------------------------
let codeStringsDiv_7 = document.getElementById("stringsCode_7");
let outcomeStringsDiv_7 = document.getElementById("stringsOutput_7");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_7 =
`<pre><code>
let varOne = "hello";

function stringFunc(string_1) {
  return string_1.slice(5);
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_7.innerHTML = codeStringsExample_7;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx7 = "hello";

function stringFuncV7(string_1) {
  return string_1.slice(5);
};

let outcomeStrings_7 = stringFuncV7(stringsOneEx7);
outcomeStringsDiv_7.innerHTML = `outcome: <code>${outcomeStrings_7}</code>`;
// ///////////////////////////////////////////////////////////////////////////

// Strings: slice() V3 -------------------------------------------------
let codeStringsDiv_8 = document.getElementById("stringsCode_8");
let outcomeStringsDiv_8 = document.getElementById("stringsOutput_8");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_8 =
`<pre><code>
let varOne = "hello";

function stringFunc(string_1) {
  return string_1.slice(-1);
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_8.innerHTML = codeStringsExample_8;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx8 = "hello";

function stringFuncV8(string_1) {
  return string_1.slice(-1);
};

let outcomeStrings_8 = stringFuncV8(stringsOneEx8);
outcomeStringsDiv_8.innerHTML = `outcome: <code>${outcomeStrings_8}</code>`;
// ///////////////////////////////////////////////////////////////////////////

// Strings: slice() V4 -------------------------------------------------
let codeStringsDiv_9 = document.getElementById("stringsCode_9");
let outcomeStringsDiv_9 = document.getElementById("stringsOutput_9");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_9 =
`<pre><code>
let varOne = "hello";

function stringFunc(string_1) {
  return string_1.slice(1, 3);
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_9.innerHTML = codeStringsExample_9;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx9 = "hello";

function stringFuncV9(string_1) {
  return string_1.slice(1, 3);
};

let outcomeStrings_9 = stringFuncV9(stringsOneEx9);
outcomeStringsDiv_9.innerHTML = `outcome: <code>${outcomeStrings_9}</code>`;
// ///////////////////////////////////////////////////////////////////////////

// Strings: slice() V5 -------------------------------------------------
let codeStringsDiv_10 = document.getElementById("stringsCode_10");
let outcomeStringsDiv_10 = document.getElementById("stringsOutput_10");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_10 =
`<pre><code>
let varOne = "hello";

function stringFunc(string_1) {
  return string_1.slice(2, -1);
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_10.innerHTML = codeStringsExample_10;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx10 = "hello";

function stringFuncV10(string_1) {
  return string_1.slice(2, -1);
};

let outcomeStrings_10 = stringFuncV10(stringsOneEx10);
outcomeStringsDiv_10.innerHTML = `outcome: <code>${outcomeStrings_10}</code>`;
// ///////////////////////////////////////////////////////////////////////////

// Strings: slice() V6 -------------------------------------------------
let codeStringsDiv_11 = document.getElementById("stringsCode_11");
let outcomeStringsDiv_11 = document.getElementById("stringsOutput_11");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_11 =
`<pre><code>
let varOne = "hello";

function stringFunc(string_1) {
  return string_1.slice(-3, string_1.length);
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_11.innerHTML = codeStringsExample_11;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx11 = "hello";

function stringFuncV11(string_1) {
  return string_1.slice(-3, string_1.length);
};

let outcomeStrings_11 = stringFuncV11(stringsOneEx11);
outcomeStringsDiv_11.innerHTML = `outcome: <code>${outcomeStrings_11}</code>`;
// ///////////////////////////////////////////////////////////////////////////

// Strings: substring() ----------------------------------------------
let codeStringsDiv_12 = document.getElementById("stringsCode_12");
let outcomeStringsDiv_12 = document.getElementById("stringsOutput_12");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_12 =
`<pre><code>
let varOne = "hello";

function stringFunc(string_1) {
  return string_1.substring(0, 2);
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_12.innerHTML = codeStringsExample_12;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx12 = "hello";

function stringFuncV12(string_1) {
  return string_1.substring(0, 2);
};

let outcomeStrings_12 = stringFuncV12(stringsOneEx12);
outcomeStringsDiv_12.innerHTML = `outcome: <code>${outcomeStrings_12}</code>`;
// ///////////////////////////////////////////////////////////////////////////

// Strings: toLowerCase() ----------------------------------------------
let codeStringsDiv_13 = document.getElementById("stringsCode_13");
let outcomeStringsDiv_13 = document.getElementById("stringsOutput_13");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_13 =
`<pre><code>
let varOne = "HeLLo";

function stringFunc(string_1) {
  return string_1.toLowerCase();
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_13.innerHTML = codeStringsExample_13;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx13 = "HeLLo";

function stringFuncV13(string_1) {
  return string_1.toLowerCase();
};

let outcomeStrings_13 = stringFuncV13(stringsOneEx13);
outcomeStringsDiv_13.innerHTML = `outcome: <code>${outcomeStrings_13}</code>`;
// ///////////////////////////////////////////////////////////////////////////

// Strings: toUpperCase() ----------------------------------------------
let codeStringsDiv_14 = document.getElementById("stringsCode_14");
let outcomeStringsDiv_14 = document.getElementById("stringsOutput_14");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_14 =
`<pre><code>
let varOne = "HeLLo";

function stringFunc(string_1) {
  return string_1.toUpperCase();
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_14.innerHTML = codeStringsExample_14;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx14 = "HeLLo";

function stringFuncV14(string_1) {
  return string_1.toUpperCase();
};

let outcomeStrings_14 = stringFuncV14(stringsOneEx14);
outcomeStringsDiv_14.innerHTML = `outcome: <code>${outcomeStrings_14}</code>`;
// ///////////////////////////////////////////////////////////////////////////

// Strings: replace() ----------------------------------------------
let codeStringsDiv_15 = document.getElementById("stringsCode_15");
let outcomeStringsDiv_15 = document.getElementById("stringsOutput_15");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_15 =
`<pre><code>
let varOne = "HeLLo";

function stringFunc(string_1) {
  return string_1.replace("LL", "ll");
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_15.innerHTML = codeStringsExample_15;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx15 = "HeLLo";

function stringFuncV15(string_1) {
  return string_1.replace("LL", "ll");
};

let outcomeStrings_15 = stringFuncV15(stringsOneEx15);
outcomeStringsDiv_15.innerHTML = `outcome: <code>${outcomeStrings_15}</code>`;
// ///////////////////////////////////////////////////////////////////////////

// Strings: concat() ----------------------------------------------
let codeStringsDiv_16 = document.getElementById("stringsCode_16");
let outcomeStringsDiv_16 = document.getElementById("stringsOutput_16");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_16 =
`<pre><code>
let varOne = "Hello";

function stringFunc(string_1) {
  return string_1.concat(" World!");
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_16.innerHTML = codeStringsExample_16;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx16 = "Hello";

function stringFuncV16(string_1) {
  return string_1.concat(" World!");
};

let outcomeStrings_16 = stringFuncV16(stringsOneEx16);
outcomeStringsDiv_16.innerHTML = `outcome: <code>${outcomeStrings_16}</code>`;
// ///////////////////////////////////////////////////////////////////////////

// Strings: repeat() ----------------------------------------------
let codeStringsDiv_17 = document.getElementById("stringsCode_17");
let outcomeStringsDiv_17 = document.getElementById("stringsOutput_17");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_17 =
`<pre><code>
let varOne = "Hello";

function stringFunc(string_1) {
  return string_1.repeat(3);
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_17.innerHTML = codeStringsExample_17;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx17 = "Hello";

function stringFuncV17(string_1) {
  return string_1.repeat(3);
};

let outcomeStrings_17 = stringFuncV17(stringsOneEx17);
outcomeStringsDiv_17.innerHTML = `outcome: <code>${outcomeStrings_17}</code>`;
// ///////////////////////////////////////////////////////////////////////////

// Strings: match() ----------------------------------------------
let codeStringsDiv_18 = document.getElementById("stringsCode_18");
let outcomeStringsDiv_18 = document.getElementById("stringsOutput_18");
let outcomeStringsDiv_18b = document.getElementById("stringsOutput_18b");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_18 =
`<pre><code>
let varOne = "Hello friends";

function stringFunc(string_1) {
  let found = string_1.match(/friends/);
  return found;
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_18.innerHTML = codeStringsExample_18;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx18 = "Hello friends";

function stringFuncV18(string_1) {
  let found = string_1.match(/friends/);
  return found;
};

let outcomeStrings_18 = stringFuncV18(stringsOneEx18);
let outcomeStrings_18b = Array.isArray(outcomeStrings_18);
outcomeStringsDiv_18.innerHTML = `outcome: <code>${outcomeStrings_18}</code>`;
outcomeStringsDiv_18b.innerHTML = `Array.isArray(outcome): <code>${outcomeStrings_18b}</code>`;
// ///////////////////////////////////////////////////////////////////////////

// Strings: split() ----------------------------------------------
let codeStringsDiv_19 = document.getElementById("stringsCode_19");
let outcomeStringsDiv_19 = document.getElementById("stringsOutput_19");
let outcomeStringsDiv_19b = document.getElementById("stringsOutput_19b");

// Adds the example code to the html page. ----------------------------
let codeStringsExample_19 =
`<pre><code>
let varOne = "Hello my friends";

function stringFunc(string_1) {
  let newArray = string_1.split(" ");
  return newArray;
};
let outcome = stringFunc(varOne);
</code></pre>`;

codeStringsDiv_19.innerHTML = codeStringsExample_19;

// Runs the function and adds the answer to the html page. -------
let stringsOneEx19 = "Hello my friends";

function stringFuncV19(string_1) {
  let newArray = string_1.split(" ");
  return newArray;
};

let outcomeStrings_19 = stringFuncV19(stringsOneEx19);
let outcomeStrings_19b = Array.isArray(outcomeStrings_19);
outcomeStringsDiv_19.innerHTML = `outcome: <code>${outcomeStrings_19}</code>`;
outcomeStringsDiv_19b.innerHTML = `Array.isArray(outcome): <code>${outcomeStrings_19b}</code>`;
// ///////////////////////////////////////////////////////////////////////////
