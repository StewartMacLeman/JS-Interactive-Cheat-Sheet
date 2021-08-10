"use strict";

// Numbers: Exponents V1 -----------------------------------------------
let codeNumbersDiv_1 = document.getElementById("numbersCode_1");
let outcomeNumbersDiv_1 = document.getElementById("numbersOutput_1");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_1 =
`<pre><code>
let varOne = 1e3;

function numberFunc(var_1) {
  return var_1;
};
let outcome = numberFunc(varOne);
</code></pre>`;

codeNumbersDiv_1.innerHTML = codeNumbersExample_1;

// Runs the function and adds the answer to the html page. -------
let numbersOneEx1 = 1e3;

function numberFuncV1(var_1) {
  return var_1;
};

let outcomeNumbers_1 = numberFuncV1(numbersOneEx1);
outcomeNumbersDiv_1.innerHTML = `outcome: <code>${outcomeNumbers_1}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Exponents V2 -----------------------------------------------
let codeNumbersDiv_2 = document.getElementById("numbersCode_2");
let outcomeNumbersDiv_2 = document.getElementById("numbersOutput_2");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_2 =
`<pre><code>
let varOne = 1e-3;

function numberFunc(var_1) {
  return var_1;
};
let outcome = numberFunc(varOne);
</code></pre>`;

codeNumbersDiv_2.innerHTML = codeNumbersExample_2;

// Runs the function and adds the answer to the html page. -------
let numbersOneEx2 = 1e-3;

function numberFuncV2(var_1) {
  return var_1;
};

let outcomeNumbers_2 = numberFuncV1(numbersOneEx2);
outcomeNumbersDiv_2.innerHTML = `outcome: <code>${outcomeNumbers_2}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: parseInt() V1 ------------------------------------------------
let codeNumbersDiv_3 = document.getElementById("numbersCode_3");
let outcomeNumbersDiv_3 = document.getElementById("numbersOutput_3");
let outcomeNumbersDiv_3b = document.getElementById("numbersOutput_3b");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_3 =
`<pre><code>
let varOne = "1234";

function numberFunc(var_1) {
  let toNumber = parseInt(var_1);
  return toNumber;
};
let outcome = numberFunc(varOne);
</code></pre>`;

codeNumbersDiv_3.innerHTML = codeNumbersExample_3;

// Runs the function and adds the answer to the html page. -------
let numbersOneEx3 = "1234";

function numberFuncV3(var_1) {
  let toNumber = parseInt(var_1);
  return toNumber;
};

let outcomeNumbers_3 = numberFuncV3(numbersOneEx3);
let outcomeNumbers_3b = typeof outcomeNumbers_3;
outcomeNumbersDiv_3.innerHTML = `outcome: <code>${outcomeNumbers_3}</code>`;
outcomeNumbersDiv_3b.innerHTML = `typeof outcome: <code>${outcomeNumbers_3b}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: parseInt() V2 ------------------------------------------------
let codeNumbersDiv_4 = document.getElementById("numbersCode_4");
let outcomeNumbersDiv_4 = document.getElementById("numbersOutput_4");
let outcomeNumbersDiv_4b = document.getElementById("numbersOutput_4b");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_4 =
`<pre><code>
let varOne = "1234px";

function numberFunc(var_1) {
  let toNumber = parseInt(var_1);
  return toNumber;
};
let outcome = numberFunc(varOne);
</code></pre>`;

codeNumbersDiv_4.innerHTML = codeNumbersExample_4;

// Runs the function and adds the answer to the html page. -------
let numbersOneEx4 = "1234px";

function numberFuncV4(var_1) {
  let toNumber = parseInt(var_1);
  return toNumber;
};

let outcomeNumbers_4 = numberFuncV4(numbersOneEx4);
let outcomeNumbers_4b = typeof outcomeNumbers_4;
outcomeNumbersDiv_4.innerHTML = `outcome: <code>${outcomeNumbers_4}</code>`;
outcomeNumbersDiv_4b.innerHTML = `typeof outcome: <code>${outcomeNumbers_4b}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: parseInt() V3 ------------------------------------------------
let codeNumbersDiv_5 = document.getElementById("numbersCode_5");
let outcomeNumbersDiv_5 = document.getElementById("numbersOutput_5");
let outcomeNumbersDiv_5b = document.getElementById("numbersOutput_5b");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_5 =
`<pre><code>
let varOne = "12.34px";

function numberFunc(var_1) {
  let toNumber = parseInt(var_1);
  return toNumber;
};
let outcome = numberFunc(varOne);
</code></pre>`;

codeNumbersDiv_5.innerHTML = codeNumbersExample_5;

// Runs the function and adds the answer to the html page. -------
let numbersOneEx5 = "12.34px";

function numberFuncV5(var_1) {
  let toNumber = parseInt(var_1);
  return toNumber;
};

let outcomeNumbers_5 = numberFuncV5(numbersOneEx5);
let outcomeNumbers_5b = typeof outcomeNumbers_5;
outcomeNumbersDiv_5.innerHTML = `outcome: <code>${outcomeNumbers_5}</code>`;
outcomeNumbersDiv_5b.innerHTML = `typeof outcome: <code>${outcomeNumbers_5b}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: parseFloat()  -------------------------------------------------
let codeNumbersDiv_6 = document.getElementById("numbersCode_6");
let outcomeNumbersDiv_6 = document.getElementById("numbersOutput_6");
let outcomeNumbersDiv_6b = document.getElementById("numbersOutput_6b");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_6 =
`<pre><code>
let varOne = "12.34px";

function numberFunc(var_1) {
  let toNumber = parseFloat(var_1);
  return toNumber;
};
let outcome = numberFunc(varOne);
</code></pre>`;

codeNumbersDiv_6.innerHTML = codeNumbersExample_6;

// Runs the function and adds the answer to the html page. -------
let numbersOneEx6 = "12.34px";

function numberFuncV6(var_1) {
  let toNumber = parseFloat(var_1);
  return toNumber;
};

let outcomeNumbers_6 = numberFuncV6(numbersOneEx6);
let outcomeNumbers_6b = typeof outcomeNumbers_6;
outcomeNumbersDiv_6.innerHTML = `outcome: <code>${outcomeNumbers_6}</code>`;
outcomeNumbersDiv_6b.innerHTML = `typeof outcome: <code>${outcomeNumbers_6b}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Number() V1 -------------------------------------------------
let codeNumbersDiv_7 = document.getElementById("numbersCode_7");
let outcomeNumbersDiv_7 = document.getElementById("numbersOutput_7");
let outcomeNumbersDiv_7b = document.getElementById("numbersOutput_7b");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_7 =
`<pre><code>
let varOne = "12.34";

function numberFunc(var_1) {
  let toNumber = Number(var_1);
  return toNumber;
};
let outcome = numberFunc(varOne);
</code></pre>`;

codeNumbersDiv_7.innerHTML = codeNumbersExample_7;

// Runs the function and adds the answer to the html page. -------
let numbersOneEx7 = "12.34";

function numberFuncV7(var_1) {
  let toNumber = Number(var_1);
  return toNumber;
};

let outcomeNumbers_7 = numberFuncV7(numbersOneEx7);
let outcomeNumbers_7b = typeof outcomeNumbers_7;
outcomeNumbersDiv_7.innerHTML = `outcome: <code>${outcomeNumbers_7}</code>`;
outcomeNumbersDiv_7b.innerHTML = `typeof outcome: <code>${outcomeNumbers_7b}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Number() V2 -------------------------------------------------
let codeNumbersDiv_8 = document.getElementById("numbersCode_8");
let outcomeNumbersDiv_8 = document.getElementById("numbersOutput_8");
let outcomeNumbersDiv_8b = document.getElementById("numbersOutput_8b");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_8 =
`<pre><code>
let varOne = "12.34px";

function numberFunc(var_1) {
  let toNumber = Number(var_1);
  return toNumber;
};
let outcome = numberFunc(varOne);
</code></pre>`;

codeNumbersDiv_8.innerHTML = codeNumbersExample_8;

// Runs the function and adds the answer to the html page. -------
let numbersOneEx8 = "12.34px";

function numberFuncV8(var_1) {
  let toNumber = Number(var_1);
  return toNumber;
};

let outcomeNumbers_8 = numberFuncV8(numbersOneEx8);
let outcomeNumbers_8b = typeof outcomeNumbers_8;
outcomeNumbersDiv_8.innerHTML = `outcome: <code>${outcomeNumbers_8}</code>`;
outcomeNumbersDiv_8b.innerHTML = `typeof outcome: <code>${outcomeNumbers_8b}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Number() V3 -------------------------------------------------
let codeNumbersDiv_9 = document.getElementById("numbersCode_9");
let outcomeNumbersDiv_9 = document.getElementById("numbersOutput_9");
let outcomeNumbersDiv_9b = document.getElementById("numbersOutput_9b");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_9 =
`<pre><code>
let varOne = true;

function numberFunc(var_1) {
  let toNumber = Number(var_1);
  return toNumber;
};
let outcome = numberFunc(varOne);
</code></pre>`;

codeNumbersDiv_9.innerHTML = codeNumbersExample_9;

// Runs the function and adds the answer to the html page. -------
let numbersOneEx9 = true;

function numberFuncV9(var_1) {
  let toNumber = Number(var_1);
  return toNumber;
};

let outcomeNumbers_9 = numberFuncV9(numbersOneEx9);
let outcomeNumbers_9b = typeof outcomeNumbers_9;
outcomeNumbersDiv_9.innerHTML = `outcome: <code>${outcomeNumbers_9}</code>`;
outcomeNumbersDiv_9b.innerHTML = `typeof outcome: <code>${outcomeNumbers_9b}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: The + Operator V1 -------------------------------------------
let codeNumbersDiv_10 = document.getElementById("numbersCode_10");
let outcomeNumbersDiv_10 = document.getElementById("numbersOutput_10");
let outcomeNumbersDiv_10b = document.getElementById("numbersOutput_10b");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_10 =
`<pre><code>
let varOne = "1234";

function numberFunc(var_1) {
  let toNumber = +var_1;
  return toNumber;
};
let outcome = numberFunc(varOne);
</code></pre>`;

codeNumbersDiv_10.innerHTML = codeNumbersExample_10;

// Runs the function and adds the answer to the html page. -------
let numbersOneEx10 = "1234";

function numberFuncV10(var_1) {
  let toNumber = +var_1;
  return toNumber;
};

let outcomeNumbers_10 = numberFuncV10(numbersOneEx10);
let outcomeNumbers_10b = typeof outcomeNumbers_10;
outcomeNumbersDiv_10.innerHTML = `outcome: <code>${outcomeNumbers_10}</code>`;
outcomeNumbersDiv_10b.innerHTML = `typeof outcome: <code>${outcomeNumbers_10b}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: The + Operator V2 -------------------------------------------
let codeNumbersDiv_11 = document.getElementById("numbersCode_11");
let outcomeNumbersDiv_11 = document.getElementById("numbersOutput_11");
let outcomeNumbersDiv_11b = document.getElementById("numbersOutput_11b");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_11 =
`<pre><code>
let varOne = "1234px";

function numberFunc(var_1) {
  let toNumber = +var_1;
  return toNumber;
};
let outcome = numberFunc(varOne);
</code></pre>`;

codeNumbersDiv_11.innerHTML = codeNumbersExample_11;

// Runs the function and adds the answer to the html page. -------
let numbersOneEx11 = "1234px";

function numberFuncV11(var_1) {
  let toNumber = +var_1;
  return toNumber;
};

let outcomeNumbers_11 = numberFuncV11(numbersOneEx11);
let outcomeNumbers_11b = typeof outcomeNumbers_11;
outcomeNumbersDiv_11.innerHTML = `outcome: <code>${outcomeNumbers_11}</code>`;
outcomeNumbersDiv_11b.innerHTML = `typeof outcome: <code>${outcomeNumbers_11b}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: toString() -----------------------------------------------
let codeNumbersDiv_12 = document.getElementById("numbersCode_12");
let outcomeNumbersDiv_12 = document.getElementById("numbersOutput_12");
let outcomeNumbersDiv_12b = document.getElementById("numbersOutput_12b");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_12 =
`<pre><code>
let varOne = 1234;

function numberFunc(var_1) {
  let toSting = var_1.toString();
  return toSting;
};
let outcome = numberFunc(varOne);
</code></pre>`;

codeNumbersDiv_12.innerHTML = codeNumbersExample_12;

// Runs the function and adds the answer to the html page. -------
let numbersOneEx12 = 1234;

function numberFuncV12(var_1) {
  let toSting = var_1.toString();
  return toSting;
};

let outcomeNumbers_12 = numberFuncV12(numbersOneEx12);
let outcomeNumbers_12b = typeof outcomeNumbers_12;
outcomeNumbersDiv_12.innerHTML = `outcome: <code>${outcomeNumbers_12}</code>`;
outcomeNumbersDiv_12b.innerHTML = `typeof outcome: <code>${outcomeNumbers_12b}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Math.max() V1 ----------------------------------------------
let codeNumbersDiv_13 = document.getElementById("numbersCode_13");
let outcomeNumbersDiv_13 = document.getElementById("numbersOutput_13");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_13 =
`<pre><code>
let varOne = 123;
let varTwo = 12;
let varThree = 1234;
let varFour = 1;

function numFunc(var_1, var_2, var_3, var_4) {
  let maxNumber = Math.max(var_1, var_2, var_3, var_4);
  return maxNumber;
};
let outcome = numFunc(varOne, varTwo, varThree, varFour);
</code></pre>`;

codeNumbersDiv_13.innerHTML = codeNumbersExample_13;

// Runs the function and adds the answer to the html page. -------
let numOneEx13 = 123;
let numTwoEx13 = 12;
let numThreeEx13 = 1234;
let numFourEx13 = 1;

function numberFuncV13(var_1, var_2, var_3, var_4) {
  let maxNumber = Math.max(var_1, var_2, var_3, var_4);
  return maxNumber;
};

let outcomeNumbers_13 = numberFuncV13(numOneEx13, numTwoEx13, numThreeEx13, numFourEx13);
outcomeNumbersDiv_13.innerHTML = `outcome: <code>${outcomeNumbers_13}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Math.max() V2 ---------------------------------------------
let codeNumbersDiv_14 = document.getElementById("numbersCode_14");
let outcomeNumbersDiv_14 = document.getElementById("numbersOutput_14");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_14 =
`<pre><code>
let varOne = [123, 12, 1234, 1];

function numFunc(var_1) {
  let maxNumber = Math.max(var_1);
  return maxNumber;
};
let outcome = numFunc(varOne);
</code></pre>`;

codeNumbersDiv_14.innerHTML = codeNumbersExample_14;

// Runs the function and adds the answer to the html page. -------
let numOneEx14 = [123, 12, 1234, 1];

function numberFuncV14(var_1) {
  let maxNumber = Math.max(var_1);
  return maxNumber;
};

let outcomeNumbers_14 = numberFuncV14(numOneEx14);
outcomeNumbersDiv_14.innerHTML = `outcome: <code>${outcomeNumbers_14}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Math.max() V3 ---------------------------------------------
let codeNumbersDiv_15 = document.getElementById("numbersCode_15");
let outcomeNumbersDiv_15 = document.getElementById("numbersOutput_15");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_15 =
`<pre><code>
let varOne = [123, 12, 1234, 1];

function numFunc(var_1) {
  let maxNumber = Math.max(...var_1);
  // Using the Spread Operator!
  return maxNumber;
};
let outcome = numFunc(varOne);
</code></pre>`;

codeNumbersDiv_15.innerHTML = codeNumbersExample_15;

// Runs the function and adds the answer to the html page. -------
let numOneEx15 = [123, 12, 1234, 1];

function numberFuncV15(var_1) {
  let maxNumber = Math.max(...var_1);
  // Using the Spread Operator!
  return maxNumber;
};

let outcomeNumbers_15 = numberFuncV15(numOneEx15);
outcomeNumbersDiv_15.innerHTML = `outcome: <code>${outcomeNumbers_15}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Math.min() -----------------------------------------------
let codeNumbersDiv_16 = document.getElementById("numbersCode_16");
let outcomeNumbersDiv_16 = document.getElementById("numbersOutput_16");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_16 =
`<pre><code>
let varOne = [123, 12, 1234, 1];

function numFunc(var_1) {
  let maxNumber = Math.min(...var_1);
  // Using the Spread Operator!
  return maxNumber;
};
let outcome = numFunc(varOne);
</code></pre>`;

codeNumbersDiv_16.innerHTML = codeNumbersExample_16;

// Runs the function and adds the answer to the html page. -------
let numOneEx16 = [123, 12, 1234, 1];

function numberFuncV16(var_1) {
  let maxNumber = Math.min(...var_1);
  // Using the Spread Operator!
  return maxNumber;
};

let outcomeNumbers_16 = numberFuncV16(numOneEx16);
outcomeNumbersDiv_16.innerHTML = `outcome: <code>${outcomeNumbers_16}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Math.pow() -----------------------------------------------
let codeNumbersDiv_17 = document.getElementById("numbersCode_17");
let outcomeNumbersDiv_17 = document.getElementById("numbersOutput_17");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_17 =
`<pre><code>
let varOne = 2;
let varTwo = 4;

function numFunc(var_1, var_2) {
  let newNumber = Math.pow(var_1, var_2);
  return newNumber;
};
let outcome = numFunc(varOne, varTwo);
</code></pre>`;

codeNumbersDiv_17.innerHTML = codeNumbersExample_17;

// Runs the function and adds the answer to the html page. -------
let numOneEx17 = 2;
let numTwoEx17 = 4;

function numberFuncV17(var_1, var_2) {
  let newNumber = Math.pow(var_1, var_2);
  return newNumber;
};

let outcomeNumbers_17 = numberFuncV17(numOneEx17, numTwoEx17);
outcomeNumbersDiv_17.innerHTML = `outcome: <code>${outcomeNumbers_17}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Math.sqrt() -----------------------------------------------
let codeNumbersDiv_18 = document.getElementById("numbersCode_18");
let outcomeNumbersDiv_18 = document.getElementById("numbersOutput_18");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_18 =
`<pre><code>
let varOne = 9;

function numFunc(var_1) {
  let newNumber = Math.sqrt(var_1);
  return newNumber;
};
let outcome = numFunc(varOne);
</code></pre>`;

codeNumbersDiv_18.innerHTML = codeNumbersExample_18;

// Runs the function and adds the answer to the html page. -------
let numOneEx18 = 9;

function numberFuncV18(var_1) {
  let newNumber = Math.sqrt(var_1);
  return newNumber;
};

let outcomeNumbers_18 = numberFuncV18(numOneEx18);
outcomeNumbersDiv_18.innerHTML = `outcome: <code>${outcomeNumbers_18}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Math.round() V1 ---------------------------------------------
let codeNumbersDiv_19 = document.getElementById("numbersCode_19");
let outcomeNumbersDiv_19 = document.getElementById("numbersOutput_19");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_19 =
`<pre><code>
let varOne = 9.856;

function numFunc(var_1) {
  let newNumber = Math.round(var_1);
  return newNumber;
};
let outcome = numFunc(varOne);
</code></pre>`;

codeNumbersDiv_19.innerHTML = codeNumbersExample_19;

// Runs the function and adds the answer to the html page. -------
let numOneEx19 = 9.856;

function numberFuncV19(var_1) {
  let newNumber = Math.round(var_1);
  return newNumber;
};

let outcomeNumbers_19 = numberFuncV19(numOneEx19);
outcomeNumbersDiv_19.innerHTML = `outcome: <code>${outcomeNumbers_19}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Math.round() V2 ---------------------------------------------
let codeNumbersDiv_20 = document.getElementById("numbersCode_20");
let outcomeNumbersDiv_20 = document.getElementById("numbersOutput_20");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_20 =
`<pre><code>
let varOne = 9.456;

function numFunc(var_1) {
  let newNumber = Math.round(var_1);
  return newNumber;
};
let outcome = numFunc(varOne);
</code></pre>`;

codeNumbersDiv_20.innerHTML = codeNumbersExample_20;

// Runs the function and adds the answer to the html page. -------
let numOneEx20 = 9.456;

function numberFuncV20(var_1) {
  let newNumber = Math.round(var_1);
  return newNumber;
};

let outcomeNumbers_20 = numberFuncV20(numOneEx20);
outcomeNumbersDiv_20.innerHTML = `outcome: <code>${outcomeNumbers_20}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Math.ceil() V1 ---------------------------------------------
let codeNumbersDiv_21 = document.getElementById("numbersCode_21");
let outcomeNumbersDiv_21 = document.getElementById("numbersOutput_21");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_21 =
`<pre><code>
let varOne = 9.856;

function numFunc(var_1) {
  let newNumber = Math.ceil(var_1);
  return newNumber;
};
let outcome = numFunc(varOne);
</code></pre>`;

codeNumbersDiv_21.innerHTML = codeNumbersExample_21;

// Runs the function and adds the answer to the html page. -------
let numOneEx21 = 9.856;

function numberFuncV21(var_1) {
  let newNumber = Math.ceil(var_1);
  return newNumber;
};

let outcomeNumbers_21 = numberFuncV21(numOneEx21);
outcomeNumbersDiv_21.innerHTML = `outcome: <code>${outcomeNumbers_21}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Math.ceil() V2 ---------------------------------------------
let codeNumbersDiv_22 = document.getElementById("numbersCode_22");
let outcomeNumbersDiv_22 = document.getElementById("numbersOutput_22");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_22 =
`<pre><code>
let varOne = 9.456;

function numFunc(var_1) {
  let newNumber = Math.ceil(var_1);
  return newNumber;
};
let outcome = numFunc(varOne);
</code></pre>`;

codeNumbersDiv_22.innerHTML = codeNumbersExample_22;

// Runs the function and adds the answer to the html page. -------
let numOneEx22 = 9.456;

function numberFuncV22(var_1) {
  let newNumber = Math.ceil(var_1);
  return newNumber;
};

let outcomeNumbers_22 = numberFuncV22(numOneEx22);
outcomeNumbersDiv_22.innerHTML = `outcome: <code>${outcomeNumbers_22}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Math.floor() V1 ---------------------------------------------
let codeNumbersDiv_23 = document.getElementById("numbersCode_23");
let outcomeNumbersDiv_23 = document.getElementById("numbersOutput_23");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_23 =
`<pre><code>
let varOne = 9.856;

function numFunc(var_1) {
  let newNumber = Math.floor(var_1);
  return newNumber;
};
let outcome = numFunc(varOne);
</code></pre>`;

codeNumbersDiv_23.innerHTML = codeNumbersExample_23;

// Runs the function and adds the answer to the html page. -------
let numOneEx23 = 9.856;

function numberFuncV23(var_1) {
  let newNumber = Math.floor(var_1);
  return newNumber;
};

let outcomeNumbers_23 = numberFuncV23(numOneEx23);
outcomeNumbersDiv_23.innerHTML = `outcome: <code>${outcomeNumbers_23}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Math.floor() V2 ---------------------------------------------
let codeNumbersDiv_24 = document.getElementById("numbersCode_24");
let outcomeNumbersDiv_24 = document.getElementById("numbersOutput_24");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_24 =
`<pre><code>
let varOne = 9.456;

function numFunc(var_1) {
  let newNumber = Math.floor(var_1);
  return newNumber;
};
let outcome = numFunc(varOne);
</code></pre>`;

codeNumbersDiv_24.innerHTML = codeNumbersExample_24;

// Runs the function and adds the answer to the html page. -------
let numOneEx24 = 9.456;

function numberFuncV24(var_1) {
  let newNumber = Math.floor(var_1);
  return newNumber;
};

let outcomeNumbers_24 = numberFuncV24(numOneEx24);
outcomeNumbersDiv_24.innerHTML = `outcome: <code>${outcomeNumbers_24}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Math.trunc() V1 ---------------------------------------------
let codeNumbersDiv_25 = document.getElementById("numbersCode_25");
let outcomeNumbersDiv_25 = document.getElementById("numbersOutput_25");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_25 =
`<pre><code>
let varOne = 9.856;

function numFunc(var_1) {
  let newNumber = Math.trunc(var_1);
  return newNumber;
};
let outcome = numFunc(varOne);
</code></pre>`;

codeNumbersDiv_25.innerHTML = codeNumbersExample_25;

// Runs the function and adds the answer to the html page. -------
let numOneEx25 = 9.856;

function numberFuncV25(var_1) {
  let newNumber = Math.trunc(var_1);
  return newNumber;
};

let outcomeNumbers_25 = numberFuncV25(numOneEx25);
outcomeNumbersDiv_25.innerHTML = `outcome: <code>${outcomeNumbers_25}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Math.trunc() V2 ---------------------------------------------
let codeNumbersDiv_26 = document.getElementById("numbersCode_26");
let outcomeNumbersDiv_26 = document.getElementById("numbersOutput_26");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_26 =
`<pre><code>
let varOne = 9.456;

function numFunc(var_1) {
  let newNumber = Math.trunc(var_1);
  return newNumber;
};
let outcome = numFunc(varOne);
</code></pre>`;

codeNumbersDiv_26.innerHTML = codeNumbersExample_26;

// Runs the function and adds the answer to the html page. -------
let numOneEx26 = 9.456;

function numberFuncV26(var_1) {
  let newNumber = Math.trunc(var_1);
  return newNumber;
};

let outcomeNumbers_26 = numberFuncV26(numOneEx26);
outcomeNumbersDiv_26.innerHTML = `outcome: <code>${outcomeNumbers_26}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Math.random() V1 ---------------------------------------------
let codeNumbersDiv_27 = document.getElementById("numbersCode_27");
let outcomeNumbersDiv_27 = document.getElementById("numbersOutput_27");
let outcomeNumbersDiv_27b = document.getElementById("numbersOutput_27b");
let numberButton_27 = document.getElementById("numBut27");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_27 =
`<pre><code>
function numFunc() {
  let newNumber = Math.random();
  return newNumber;
};
let outcome = numFunc();
</code></pre>`;

codeNumbersDiv_27.innerHTML = codeNumbersExample_27;

// Runs the function and adds the answer to the html page. -------
numberButton_27.addEventListener("click", numberFuncV27);

function numberFuncV27() {
    let outcomeNumbers_27 = Math.random();
    outcomeNumbersDiv_27.innerHTML = `outcome: <code>${outcomeNumbers_27}</code>`;
};

outcomeNumbersDiv_27b.innerHTML = `Creates a number between 0 (incl.) & 1 (excl.).`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Math.random() V2 ---------------------------------------------
let codeNumbersDiv_28 = document.getElementById("numbersCode_28");
let outcomeNumbersDiv_28 = document.getElementById("numbersOutput_28");
let outcomeNumbersDiv_28b = document.getElementById("numbersOutput_28b");
let numberButton_28 = document.getElementById("numBut28");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_28 =
`<pre><code>
function numFunc() {
  let newNumber = Math.floor((Math.random() * 10) + 1);
  return newNumber;
};
let outcome = numFunc();
</code></pre>`;

codeNumbersDiv_28.innerHTML = codeNumbersExample_28;

// Runs the function and adds the answer to the html page. -------
numberButton_28.addEventListener("click", numberFuncV28);

function numberFuncV28() {
    let outcomeNumbers_28 = Math.floor((Math.random() * 10) + 1);
    outcomeNumbersDiv_28.innerHTML = `outcome: <code>${outcomeNumbers_28}</code>`;
};

outcomeNumbersDiv_28b.innerHTML = `Creates a number between 1 & 10.`;
// ////////////////////////////////////////////////////////////////////////

// Numbers: Math.random() V3 ---------------------------------------------
let codeNumbersDiv_29 = document.getElementById("numbersCode_29");
let outcomeNumbersDiv_29 = document.getElementById("numbersOutput_29");
let outcomeNumbersDiv_29b = document.getElementById("numbersOutput_29b");
let numberButton_29 = document.getElementById("numBut29");

// Adds the example code to the html page. ----------------------------
let codeNumbersExample_29 =
`<pre><code>
function numFunc() {
  let newNumber = Math.floor((Math.random() * 10));
  return newNumber;
};
let outcome = numFunc();
</code></pre>`;

codeNumbersDiv_29.innerHTML = codeNumbersExample_29;

// Runs the function and adds the answer to the html page. -------
numberButton_29.addEventListener("click", numberFuncV29);

function numberFuncV29() {
    let outcomeNumbers_29 = Math.floor((Math.random() * 10));
    outcomeNumbersDiv_29.innerHTML = `outcome: <code>${outcomeNumbers_29}</code>`;
};

outcomeNumbersDiv_29b.innerHTML = `Creates a number between 0 & 9.`;
// ////////////////////////////////////////////////////////////////////////
