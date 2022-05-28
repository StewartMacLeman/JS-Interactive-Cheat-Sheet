"use strict";

// Arrays: The Index Value V1 ------------------------------------------
let codeArraysDiv_1 = document.getElementById("arraysCode_1");
let outcomeArraysDiv_1 = document.getElementById("arraysOutput_1");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_1 =
`<pre><code>
let varOne = ["apples", "bananas", "mangoes"];

function arrayFunc(var_1) {
  return var_1[0];
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_1.innerHTML = codeArraysExample_1;

// Runs the function and adds the answer to the html page. -------
let arrOneEx1 = ["apples", "bananas", "mangoes"];

function arrayFuncV1(var_1) {
  return var_1[0];
};

let outcomeArrays_1 = arrayFuncV1(arrOneEx1);
outcomeArraysDiv_1.innerHTML = `outcome: <code>${outcomeArrays_1}</code>`;
// ////////////////////////////////////////////////////////////////////////

// Arrays: The Index Value V2 ------------------------------------------
let codeArraysDiv_2 = document.getElementById("arraysCode_2");
let outcomeArraysDiv_2 = document.getElementById("arraysOutput_2");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_2 =
`<pre><code>
let varOne = ["apples", "bananas", "mangoes"];

function arrayFunc(var_1) {
  return var_1[var_1.length];
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_2.innerHTML = codeArraysExample_2;

// Runs the function and adds the answer to the html page. -------
let arrOneEx2 = ["apples", "bananas", "mangoes"];

function arrayFuncV2(var_1) {
  return var_1[var_1.length];
};

let outcomeArrays_2 = arrayFuncV2(arrOneEx2);
outcomeArraysDiv_2.innerHTML = `outcome: <code>${outcomeArrays_2}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: The Index Value V3 ------------------------------------------
let codeArraysDiv_3 = document.getElementById("arraysCode_3");
let outcomeArraysDiv_3 = document.getElementById("arraysOutput_3");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_3 =
`<pre><code>
let varOne = ["apples", "bananas", "mangoes"];

function arrayFunc(var_1) {
  return var_1[var_1.length-1];
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_3.innerHTML = codeArraysExample_3;

// Runs the function and adds the answer to the html page. -------
let arrOneEx3 = ["apples", "bananas", "mangoes"];

function arrayFuncV3(var_1) {
  return var_1[var_1.length-1];
};

let outcomeArrays_3 = arrayFuncV3(arrOneEx3);
outcomeArraysDiv_3.innerHTML = `outcome: <code>${outcomeArrays_3}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: The Index Value V4 ------------------------------------------
let codeArraysDiv_4 = document.getElementById("arraysCode_4");
let outcomeArraysDiv_4 = document.getElementById("arraysOutput_4");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_4 =
`<pre><code>
let varOne = ["apples", "bananas", "mangoes"];

function arrayFunc(var_1) {
  var_1[var_1.length] = "grapes";
  return var_1;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_4.innerHTML = codeArraysExample_4;

// Runs the function and adds the answer to the html page. -------
let arrOneEx4 = ["apples", "bananas", "mangoes"];

function arrayFuncV4(var_1) {
  var_1[var_1.length] = "grapes";
  return var_1;
};

let outcomeArrays_4 = arrayFuncV4(arrOneEx4);
outcomeArraysDiv_4.innerHTML = `outcome: <code>${outcomeArrays_4}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: The Index Value V5 ------------------------------------------
let codeArraysDiv_5 = document.getElementById("arraysCode_5");
let outcomeArraysDiv_5 = document.getElementById("arraysOutput_5");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_5 =
`<pre><code>
let varOne = ["apples", "bananas", "mangoes"];

function arrayFunc(var_1) {
  var_1[0] = "grapes";
  return var_1;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_5.innerHTML = codeArraysExample_5;

// Runs the function and adds the answer to the html page. -------
let arrOneEx5 = ["apples", "bananas", "mangoes"];

function arrayFuncV5(var_1) {
  var_1[0] = "grapes";
  return var_1;
};

let outcomeArrays_5 = arrayFuncV5(arrOneEx5);
outcomeArraysDiv_5.innerHTML = `outcome: <code>${outcomeArrays_5}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: Multidimensionals ----------------------------------------
let codeArraysDiv_6 = document.getElementById("arraysCode_6");
let outcomeArraysDiv_6 = document.getElementById("arraysOutput_6");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_6 =
`<pre><code>
let varOne = [["apples", "bananas"], ["mangoes", "grapes"]];

function arrayFunc(var_1) {
  return var_1[0][1];
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_6.innerHTML = codeArraysExample_6;

// Runs the function and adds the answer to the html page. -------
let arrOneEx6 = [["apples", "bananas"], ["mangoes", "grapes"]];

function arrayFuncV6(var_1) {
  return var_1[0][1];
};

let outcomeArrays_6 = arrayFuncV6(arrOneEx6);
outcomeArraysDiv_6.innerHTML = `outcome: <code>${outcomeArrays_6}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: push() ----------------------------------------------------
let codeArraysDiv_7 = document.getElementById("arraysCode_7");
let outcomeArraysDiv_7 = document.getElementById("arraysOutput_7");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_7 =
`<pre><code>
let varOne = ["apples", "bananas", "mangoes"];

function arrayFunc(var_1) {
  var_1.push("grapes");
  return var_1;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_7.innerHTML = codeArraysExample_7;

// Runs the function and adds the answer to the html page. -------
let arrOneEx7 = ["apples", "bananas", "mangoes"];

function arrayFuncV7(var_1) {
  var_1.push("grapes");
  return var_1;
};

let outcomeArrays_7 = arrayFuncV7(arrOneEx7);
outcomeArraysDiv_7.innerHTML = `outcome: <code>${outcomeArrays_7}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: pop() ----------------------------------------------------
let codeArraysDiv_8 = document.getElementById("arraysCode_8");
let outcomeArraysDiv_8 = document.getElementById("arraysOutput_8");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_8 =
`<pre><code>
let varOne = ["apples", "bananas", "mangoes"];

function arrayFunc(var_1) {
  var_1.pop();
  return var_1;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_8.innerHTML = codeArraysExample_8;

// Runs the function and adds the answer to the html page. -------
let arrOneEx8 = ["apples", "bananas", "mangoes"];

function arrayFuncV8(var_1) {
  var_1.pop();
  return var_1;
};

let outcomeArrays_8 = arrayFuncV8(arrOneEx8);
outcomeArraysDiv_8.innerHTML = `outcome: <code>${outcomeArrays_8}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: unshift() ----------------------------------------------------
let codeArraysDiv_9 = document.getElementById("arraysCode_9");
let outcomeArraysDiv_9 = document.getElementById("arraysOutput_9");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_9 =
`<pre><code>
let varOne = ["apples", "bananas", "mangoes"];

function arrayFunc(var_1) {
  var_1.unshift("grapes");
  return var_1;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_9.innerHTML = codeArraysExample_9;

// Runs the function and adds the answer to the html page. -------
let arrOneEx9 = ["apples", "bananas", "mangoes"];

function arrayFuncV9(var_1) {
  var_1.unshift("grapes");
  return var_1;
};

let outcomeArrays_9 = arrayFuncV9(arrOneEx9);
outcomeArraysDiv_9.innerHTML = `outcome: <code>${outcomeArrays_9}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: shift() ----------------------------------------------------
let codeArraysDiv_10 = document.getElementById("arraysCode_10");
let outcomeArraysDiv_10 = document.getElementById("arraysOutput_10");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_10 =
`<pre><code>
let varOne = ["apples", "bananas", "mangoes"];

function arrayFunc(var_1) {
  var_1.shift();
  return var_1;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_10.innerHTML = codeArraysExample_10;

// Runs the function and adds the answer to the html page. -------
let arrOneEx10 = ["apples", "bananas", "mangoes"];

function arrayFuncV10(var_1) {
  var_1.shift();
  return var_1;
};

let outcomeArrays_10 = arrayFuncV10(arrOneEx10);
outcomeArraysDiv_10.innerHTML = `outcome: <code>${outcomeArrays_10}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: toString() ----------------------------------------------------
let codeArraysDiv_11 = document.getElementById("arraysCode_11");
let outcomeArraysDiv_11 = document.getElementById("arraysOutput_11");
let outcomeArraysDiv_11b = document.getElementById("arraysOutput_11b");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_11 =
`<pre><code>
let varOne = ["ab", 123, "mangoes"];

function arrayFunc(var_1) {
  let string = var_1.toString();
  return string;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_11.innerHTML = codeArraysExample_11;

// Runs the function and adds the answer to the html page. -------
let arrOneEx11 = ["ab", 123, "mangoes"];

function arrayFuncV11(var_1) {
  let string = var_1.toString();
  return string;
};

let outcomeArrays_11 = arrayFuncV11(arrOneEx11);
let outcomeArrays_11b = typeof outcomeArrays_11;
outcomeArraysDiv_11.innerHTML = `outcome: <code>${outcomeArrays_11}</code>`;
outcomeArraysDiv_11b.innerHTML = `typeof outcome: <code>${outcomeArrays_11b}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: join() V1 --------------------------------------------------
let codeArraysDiv_12 = document.getElementById("arraysCode_12");
let outcomeArraysDiv_12 = document.getElementById("arraysOutput_12");
let outcomeArraysDiv_12b = document.getElementById("arraysOutput_12b");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_12 =
`<pre><code>
let varOne = ["ab", 123, "mangoes"];

function arrayFunc(var_1) {
  let string = var_1.join();
  return string;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_12.innerHTML = codeArraysExample_12;

// Runs the function and adds the answer to the html page. -------
let arrOneEx12 = ["ab", 123, "mangoes"];

function arrayFuncV12(var_1) {
  let string = var_1.join();
  return string;
};

let outcomeArrays_12 = arrayFuncV12(arrOneEx12);
let outcomeArrays_12b = typeof outcomeArrays_12;
outcomeArraysDiv_12.innerHTML = `outcome: <code>${outcomeArrays_12}</code>`;
outcomeArraysDiv_12b.innerHTML = `typeof outcome: <code>${outcomeArrays_12b}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: join() V2 --------------------------------------------------
let codeArraysDiv_13 = document.getElementById("arraysCode_13");
let outcomeArraysDiv_13 = document.getElementById("arraysOutput_13");
let outcomeArraysDiv_13b = document.getElementById("arraysOutput_13b");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_13 =
`<pre><code>
let varOne = ["ab", 123, "mangoes"];

function arrayFunc(var_1) {
  let string = var_1.join(" + ");
  return string;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_13.innerHTML = codeArraysExample_13;

// Runs the function and adds the answer to the html page. -------
let arrOneEx13 = ["ab", 123, "mangoes"];

function arrayFuncV13(var_1) {
  let string = var_1.join(" + ");
  return string;
};

let outcomeArrays_13 = arrayFuncV13(arrOneEx13);
let outcomeArrays_13b = typeof outcomeArrays_13;
outcomeArraysDiv_13.innerHTML = `outcome: <code>${outcomeArrays_13}</code>`;
outcomeArraysDiv_13b.innerHTML = `typeof outcome: <code>${outcomeArrays_13b}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: join() V3 --------------------------------------------------
let codeArraysDiv_14 = document.getElementById("arraysCode_14");
let outcomeArraysDiv_14 = document.getElementById("arraysOutput_14");
let outcomeArraysDiv_14b = document.getElementById("arraysOutput_14b");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_14 =
`<pre><code>
let varOne = ["ab", 123, "mangoes"];

function arrayFunc(var_1) {
  let string = var_1.join("");
  return string;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_14.innerHTML = codeArraysExample_14;

// Runs the function and adds the answer to the html page. -------
let arrOneEx14 = ["ab", 123, "mangoes"];

function arrayFuncV14(var_1) {
  let string = var_1.join("");
  return string;
};

let outcomeArrays_14 = arrayFuncV14(arrOneEx14);
let outcomeArrays_14b = typeof outcomeArrays_14;
outcomeArraysDiv_14.innerHTML = `outcome: <code>${outcomeArrays_14}</code>`;
outcomeArraysDiv_14b.innerHTML = `typeof outcome: <code>${outcomeArrays_14b}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: reverse() --------------------------------------------------
let codeArraysDiv_15 = document.getElementById("arraysCode_15");
let outcomeArraysDiv_15 = document.getElementById("arraysOutput_15");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_15 =
`<pre><code>
let varOne = ["a", "b", "c", "d", "e"];

function arrayFunc(var_1) {
  var_1.reverse();
  return var_1;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_15.innerHTML = codeArraysExample_15;

// Runs the function and adds the answer to the html page. -------
let arrOneEx15 = ["a", "b", "c", "d", "e"];

function arrayFuncV15(var_1) {
  var_1.reverse();
  return var_1;
};

let outcomeArrays_15 = arrayFuncV15(arrOneEx15);
outcomeArraysDiv_15.innerHTML = `outcome: <code>${outcomeArrays_15}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: slice() V1 --------------------------------------------------
let codeArraysDiv_16 = document.getElementById("arraysCode_16");
let outcomeArraysDiv_16 = document.getElementById("arraysOutput_16");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_16 =
`<pre><code>
let varOne = ["a", "b", "c", "d", "e"];

function arrayFunc(var_1) {
  let newArray = var_1.slice(1);
  return newArray;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_16.innerHTML = codeArraysExample_16;

// Runs the function and adds the answer to the html page. -------
let arrOneEx16 = ["a", "b", "c", "d", "e"];

function arrayFuncV16(var_1) {
  let newArray = var_1.slice(1);
  return newArray;
};

let outcomeArrays_16 = arrayFuncV16(arrOneEx16);
outcomeArraysDiv_16.innerHTML = `outcome: <code>${outcomeArrays_16}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: slice() V2 --------------------------------------------------
let codeArraysDiv_17 = document.getElementById("arraysCode_17");
let outcomeArraysDiv_17 = document.getElementById("arraysOutput_17");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_17 =
`<pre><code>
let varOne = ["a", "b", "c", "d", "e"];

function arrayFunc(var_1) {
  let newArray = var_1.slice(1, 3);
  return newArray;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_17.innerHTML = codeArraysExample_17;

// Runs the function and adds the answer to the html page. -------
let arrOneEx17 = ["a", "b", "c", "d", "e"];

function arrayFuncV17(var_1) {
  let newArray = var_1.slice(1, 3);
  return newArray;
};

let outcomeArrays_17 = arrayFuncV17(arrOneEx17);
outcomeArraysDiv_17.innerHTML = `outcome: <code>${outcomeArrays_17}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: splice() V1 -------------------------------------------------
let codeArraysDiv_18 = document.getElementById("arraysCode_18");
let outcomeArraysDiv_18 = document.getElementById("arraysOutput_18");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_18 =
`<pre><code>
let varOne = ["a", "b", "c", "d", "e"];

function arrayFunc(var_1) {
  var_1.splice(1, 2);
  return var_1;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_18.innerHTML = codeArraysExample_18;

// Runs the function and adds the answer to the html page. -------
let arrOneEx18 = ["a", "b", "c", "d", "e"];

function arrayFuncV18(var_1) {
  var_1.splice(1, 2);
  return var_1;
};

let outcomeArrays_18 = arrayFuncV18(arrOneEx18);
outcomeArraysDiv_18.innerHTML = `outcome: <code>${outcomeArrays_18}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: splice() V2 -------------------------------------------------
let codeArraysDiv_19 = document.getElementById("arraysCode_19");
let outcomeArraysDiv_19 = document.getElementById("arraysOutput_19");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_19 =
`<pre><code>
let varOne = ["a", "b", "c", "d", "e"];

function arrayFunc(var_1) {
  var_1.splice(2, 0, 123);
  return var_1;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_19.innerHTML = codeArraysExample_19;

// Runs the function and adds the answer to the html page. -------
let arrOneEx19 = ["a", "b", "c", "d", "e"];

function arrayFuncV19(var_1) {
  var_1.splice(2, 0, 123);
  return var_1;
};

let outcomeArrays_19 = arrayFuncV19(arrOneEx19);
outcomeArraysDiv_19.innerHTML = `outcome: <code>${outcomeArrays_19}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: splice() V3 -------------------------------------------------
let codeArraysDiv_20 = document.getElementById("arraysCode_20");
let outcomeArraysDiv_20 = document.getElementById("arraysOutput_20");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_20 =
`<pre><code>
let varOne = ["a", "b", "c", "d", "e"];

function arrayFunc(var_1) {
  var_1.splice(2, 2, 123, 456);
  return var_1;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_20.innerHTML = codeArraysExample_20;

// Runs the function and adds the answer to the html page. -------
let arrOneEx20 = ["a", "b", "c", "d", "e"];

function arrayFuncV20(var_1) {
  var_1.splice(2, 2, 123, 456);
  return var_1;
};

let outcomeArrays_20 = arrayFuncV20(arrOneEx20);
outcomeArraysDiv_20.innerHTML = `outcome: <code>${outcomeArrays_20}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: concat() --------------------------------------------------
let codeArraysDiv_21 = document.getElementById("arraysCode_21");
let outcomeArraysDiv_21 = document.getElementById("arraysOutput_21");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_21 =
`<pre><code>
let varOne = ["a", "b", "c"];
let varTwo = ["d", "e", "f"];

function arrayFunc(var_1, var_2) {
  let newArray = var_1.concat(var_2);
  return newArray;
};
let outcome = arrayFunc(varOne, varTwo);
</code></pre>`;

codeArraysDiv_21.innerHTML = codeArraysExample_21;

// Runs the function and adds the answer to the html page. -------
let arrOneEx21 = ["a", "b", "c"];
let arrTwoEx21 = ["d", "e", "f"];

function arrayFuncV21(var_1, var_2) {
  let newArray = var_1.concat(var_2);
  return newArray;
};

let outcomeArrays_21 = arrayFuncV21(arrOneEx21, arrTwoEx21);
outcomeArraysDiv_21.innerHTML = `outcome: <code>${outcomeArrays_21}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: includes() V1 ------------------------------------------------
let codeArraysDiv_22 = document.getElementById("arraysCode_22");
let outcomeArraysDiv_22 = document.getElementById("arraysOutput_22");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_22 =
`<pre><code>
let varOne = ["a", "b", "c", "d", "e"];

function arrayFunc(var_1) {
  let status = var_1.includes(123);
  return status;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_22.innerHTML = codeArraysExample_22;

// Runs the function and adds the answer to the html page. -------
let arrOneEx22 = ["a", "b", "c", "d", "e"];

function arrayFuncV22(var_1) {
  let status = var_1.includes(123);
  return status;
};

let outcomeArrays_22 = arrayFuncV22(arrOneEx22);
outcomeArraysDiv_22.innerHTML = `outcome: <code>${outcomeArrays_22}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: includes() V2 ------------------------------------------------
let codeArraysDiv_23 = document.getElementById("arraysCode_23");
let outcomeArraysDiv_23 = document.getElementById("arraysOutput_23");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_23 =
`<pre><code>
let varOne = ["a", "b", "c", 123, "d", "e"];

function arrayFunc(var_1) {
  let status = var_1.includes(123);
  return status;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_23.innerHTML = codeArraysExample_23;

// Runs the function and adds the answer to the html page. -------
let arrOneEx23 = ["a", "b", "c", 123, "d", "e"];

function arrayFuncV23(var_1) {
  let status = var_1.includes(123);
  return status;
};

let outcomeArrays_23 = arrayFuncV23(arrOneEx23);
outcomeArraysDiv_23.innerHTML = `outcome: <code>${outcomeArrays_23}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: Array.isArray() ----------------------------------------------
let codeArraysDiv_24 = document.getElementById("arraysCode_24");
let outcomeArraysDiv_24 = document.getElementById("arraysOutput_24");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_24 =
`<pre><code>
let varOne = ["a", "b", "c", "d", "e"];

function arrayFunc(var_1) {
  let status = Array.isArray(var_1);
  return status;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_24.innerHTML = codeArraysExample_24;

// Runs the function and adds the answer to the html page. -------
let arrOneEx24 = ["a", "b", "c", "d", "e"];

function arrayFuncV24(var_1) {
  let status = Array.isArray(var_1);
  return status;
};

let outcomeArrays_24 = arrayFuncV24(arrOneEx24);
outcomeArraysDiv_24.innerHTML = `outcome: <code>${outcomeArrays_24}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: sort() V1 --------------------------------------------------
let codeArraysDiv_25 = document.getElementById("arraysCode_25");
let outcomeArraysDiv_25 = document.getElementById("arraysOutput_25");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_25 =
`<pre><code>
let varOne = ["b", "c", "a", "c", "e", "d"];

function arrayFunc(var_1) {
  var_1.sort();
  return var_1;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_25.innerHTML = codeArraysExample_25;

// Runs the function and adds the answer to the html page. -------
let arrOneEx25 = ["b", "c", "a", "c", "e", "d"];

function arrayFuncV25(var_1) {
  var_1.sort();
  return var_1;
};

let outcomeArrays_25 = arrayFuncV25(arrOneEx25);
outcomeArraysDiv_25.innerHTML = `outcome: <code>${outcomeArrays_25}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: sort() V2 --------------------------------------------------
let codeArraysDiv_26 = document.getElementById("arraysCode_26");
let outcomeArraysDiv_26 = document.getElementById("arraysOutput_26");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_26 =
`<pre><code>
let varOne = [123, 23, 4, 1, 1000, 56];

function arrayFunc(var_1) {
  var_1.sort();
  return var_1;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_26.innerHTML = codeArraysExample_26;

// Runs the function and adds the answer to the html page. -------
let arrOneEx26 = [123, 23, 4, 1, 1000, 56];

function arrayFuncV26(var_1) {
  var_1.sort();
  return var_1;
};

let outcomeArrays_26 = arrayFuncV26(arrOneEx26);
outcomeArraysDiv_26.innerHTML = `outcome: <code>${outcomeArrays_26}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: sort() V3 --------------------------------------------------
let codeArraysDiv_27 = document.getElementById("arraysCode_27");
let outcomeArraysDiv_27 = document.getElementById("arraysOutput_27");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_27 =
`<pre><code>
let varOne = [123, 23, 4, 1, 1000, 56];

function arrayFunc(var_1) {
  var_1.sort( function(a, b) {
    return a - b;
  });
  return var_1;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_27.innerHTML = codeArraysExample_27;

// Runs the function and adds the answer to the html page. -------
let arrOneEx27 = [123, 23, 4, 1, 1000, 56];

function arrayFuncV27(var_1) {
  var_1.sort( function(a, b) {
    return a - b;
  });
  return var_1;
};

let outcomeArrays_27 = arrayFuncV27(arrOneEx27);
outcomeArraysDiv_27.innerHTML = `outcome: <code>${outcomeArrays_27}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: sort() V4 --------------------------------------------------
let codeArraysDiv_28 = document.getElementById("arraysCode_28");
let outcomeArraysDiv_28 = document.getElementById("arraysOutput_28");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_28 =
`<pre><code>
let varOne = [123, 23, 4, 1, 1000, 56];

function arrayFunc(var_1) {
  var_1.sort( function(a, b) {
    return b - a;
  });
  return var_1;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_28.innerHTML = codeArraysExample_28;

// Runs the function and adds the answer to the html page. -------
let arrOneEx28 = [123, 23, 4, 1, 1000, 56];

function arrayFuncV28(var_1) {
  var_1.sort( function(a, b) {
    return b - a;
  });
  return var_1;
};

let outcomeArrays_28 = arrayFuncV28(arrOneEx28);
outcomeArraysDiv_28.innerHTML = `outcome: <code>${outcomeArrays_28}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: forEach() --------------------------------------------------
let codeArraysDiv_29 = document.getElementById("arraysCode_29");
let outcomeArraysDiv_29 = document.getElementById("arraysOutput_29");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_29 =
`<pre><code>
let varOne = ["a", "b", "c", "d", "e"];

function arrayFunc(var_1) {
  let newArray = [];
  var_1.forEach((letter) => {
    newArray.push(letter.toUpperCase());
  });
  return newArray;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_29.innerHTML = codeArraysExample_29;

// Runs the function and adds the answer to the html page. -------
let arrOneEx29 = ["a", "b", "c", "d", "e"];

function arrayFuncV29(var_1) {
  let newArray = [];
  var_1.forEach((letter) => {
    newArray.push(letter.toUpperCase());
  });
  return newArray;
};

let outcomeArrays_29 = arrayFuncV29(arrOneEx29);
outcomeArraysDiv_29.innerHTML = `outcome: <code>${outcomeArrays_29}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: map() V1 ----------------------------------------------------
let codeArraysDiv_30 = document.getElementById("arraysCode_30");
let outcomeArraysDiv_30 = document.getElementById("arraysOutput_30");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_30 =
`<pre><code>
let varOne = ["a", "b", "c", "d", "e"];

function arrayFunc(var_1) {
  let newArray = var_1.map((letter) => {
    return letter.toUpperCase();
  });
  return newArray;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_30.innerHTML = codeArraysExample_30;

// Runs the function and adds the answer to the html page. -------
let arrOneEx30 = ["a", "b", "c", "d", "e"];

function arrayFuncV30(var_1) {
  let newArray = var_1.map((letter) => {
    return letter.toUpperCase();
  });
  return newArray;
};

let outcomeArrays_30 = arrayFuncV30(arrOneEx30);
outcomeArraysDiv_30.innerHTML = `outcome: <code>${outcomeArrays_30}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: map() V2 ----------------------------------------------------
let codeArraysDiv_31 = document.getElementById("arraysCode_31");
let outcomeArraysDiv_31 = document.getElementById("arraysOutput_31");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_31 =
`<pre><code>
let varOne = ["a", "b", "c", "d", "e"];

function arrayFunc(var_1) {
  let newArray = var_1.map((letter, index) => {
    return \`No.\${index+1}:\${letter.toUpperCase()} \`;
  });
  return newArray;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_31.innerHTML = codeArraysExample_31;

// Runs the function and adds the answer to the html page. -------
let arrOneEx31 = ["a", "b", "c", "d", "e"];

function arrayFuncV31(var_1) {
  let newArray = var_1.map((letter, index) => {
    return `No.${index+1}:${letter.toUpperCase()} `;
  });
  return newArray;
};

let outcomeArrays_31 = arrayFuncV31(arrOneEx31);
outcomeArraysDiv_31.innerHTML = `outcome: <code>${outcomeArrays_31}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: filter() --------------------------------------------------
let codeArraysDiv_32 = document.getElementById("arraysCode_32");
let outcomeArraysDiv_32 = document.getElementById("arraysOutput_32");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_32 =
`<pre><code>
let varOne = ["a", "bb", "ccc", "d", "ee"];

function arrayFunc(var_1) {
  let newArray = var_1.filter((item) => {
    return item.length >= 2;
  });
  return newArray;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_32.innerHTML = codeArraysExample_32;

// Runs the function and adds the answer to the html page. -------
let arrOneEx32 = ["a", "bb", "ccc", "d", "ee"];

function arrayFuncV32(var_1) {
  let newArray = var_1.filter((item) => {
    return item.length >= 2;
  });
  return newArray;
};

let outcomeArrays_32 = arrayFuncV32(arrOneEx32);
outcomeArraysDiv_32.innerHTML = `outcome: <code>${outcomeArrays_32}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: reduce() V1 -------------------------------------------------
let codeArraysDiv_33 = document.getElementById("arraysCode_33");
let outcomeArraysDiv_33 = document.getElementById("arraysOutput_33");
let outcomeArraysDiv_33b = document.getElementById("arraysOutput_33b");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_33 =
`<pre><code>
let varOne = [ 1, 2, 3, 4, 5 ];

function arrayFunc(var_1) {
  let total = var_1.reduce((accum, current) => {
    return accum + current;
  }, 0);
  return total;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_33.innerHTML = codeArraysExample_33;

// Runs the function and adds the answer to the html page. -------
let arrOneEx33 = [ 1, 2, 3, 4, 5 ];

function arrayFuncV33(var_1) {
  let total = var_1.reduce((accum, current) => {
    return accum + current;
  }, 0);
  return total;
};

let outcomeArrays_33 = arrayFuncV33(arrOneEx33);
let outcomeArrays_33b = typeof outcomeArrays_33;
outcomeArraysDiv_33.innerHTML = `outcome: <code>${outcomeArrays_33}</code>`;
outcomeArraysDiv_33b.innerHTML = `typeof outcome: <code>${outcomeArrays_33b}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: reduce() V2 -------------------------------------------------
let codeArraysDiv_34 = document.getElementById("arraysCode_34");
let outcomeArraysDiv_34 = document.getElementById("arraysOutput_34");
let outcomeArraysDiv_34b = document.getElementById("arraysOutput_34b");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_34 =
`<pre><code>
let varOne = [ 1, 2, 3, 4, 5 ];

function arrayFunc(var_1) {
  let total = var_1.reduce((accum, current) => {
    return accum + current;
  }, 10);
  return total;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_34.innerHTML = codeArraysExample_34;

// Runs the function and adds the answer to the html page. -------
let arrOneEx34 = [ 1, 2, 3, 4, 5 ];

function arrayFuncV34(var_1) {
  let total = var_1.reduce((accum, current) => {
    return accum + current;
  }, 10);
  return total;
};

let outcomeArrays_34 = arrayFuncV34(arrOneEx34);
let outcomeArrays_34b = typeof outcomeArrays_34;
outcomeArraysDiv_34.innerHTML = `outcome: <code>${outcomeArrays_34}</code>`;
outcomeArraysDiv_34b.innerHTML = `typeof outcome: <code>${outcomeArrays_34b}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: reduce() V3 -------------------------------------------------
let codeArraysDiv_35 = document.getElementById("arraysCode_35");
let outcomeArraysDiv_35 = document.getElementById("arraysOutput_35");
let outcomeArraysDiv_35b = document.getElementById("arraysOutput_35b");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_35 =
`<pre><code>
let varOne = ["a", "b", "c", "d", "e"];

function arrayFunc(var_1) {
  let total = var_1.reduce((accum, current) => {
    return accum + current;
  }, 5);
  return total;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_35.innerHTML = codeArraysExample_35;

// Runs the function and adds the answer to the html page. -------
let arrOneEx35 = ["a", "b", "c", "d", "e"];

function arrayFuncV35(var_1) {
  let total = var_1.reduce((accum, current) => {
    return accum + current;
  }, 5);
  return total;
};

let outcomeArrays_35 = arrayFuncV35(arrOneEx35);
let outcomeArrays_35b = typeof outcomeArrays_35;
outcomeArraysDiv_35.innerHTML = `outcome: <code>${outcomeArrays_35}</code>`;
outcomeArraysDiv_35b.innerHTML = `typeof outcome: <code>${outcomeArrays_35b}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: reduce() V4 -------------------------------------------------
let codeArraysDiv_36 = document.getElementById("arraysCode_36");
let outcomeArraysDiv_36 = document.getElementById("arraysOutput_36");
let outcomeArraysDiv_36b = document.getElementById("arraysOutput_36b");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_36 =
`<pre><code>
let varOne = [123, 23, 4, 1, 1000, 56];

function arrayFunc(var_1) {
  let total = var_1.reduce((accum, current) => {
    return Math.max(accum, current);
  }, 0);
  return total;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_36.innerHTML = codeArraysExample_36;

// Runs the function and adds the answer to the html page. -------
let arrOneEx36 = [123, 23, 4, 1, 1000, 56];

function arrayFuncV36(var_1) {
  let total = var_1.reduce((accum, current) => {
    return Math.max(accum, current);
  }, 0);
  return total;
};

let outcomeArrays_36 = arrayFuncV36(arrOneEx36);
let outcomeArrays_36b = typeof outcomeArrays_36;
outcomeArraysDiv_36.innerHTML = `outcome: <code>${outcomeArrays_36}</code>`;
outcomeArraysDiv_36b.innerHTML = `typeof outcome: <code>${outcomeArrays_36b}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: findIndex() V1 ----------------------------------------------
let codeArraysDiv_37 = document.getElementById("arraysCode_37");
let outcomeArraysDiv_37 = document.getElementById("arraysOutput_37");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_37 =
`<pre><code>
let varOne = [123, 23, 904, 1, 1000, 56];

function arrayFunc(var_1) {
  let index = var_1.findIndex((item) => {
    return item > 900;
  })
  return index;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_37.innerHTML = codeArraysExample_37;

// Runs the function and adds the answer to the html page. -------
let arrOneEx37 = [123, 23, 904, 1, 1000, 56];

function arrayFuncV37(var_1) {
  let index = var_1.findIndex((item) => {
    return item > 900;
  })
  return index;
};

let outcomeArrays_37 = arrayFuncV37(arrOneEx37);
outcomeArraysDiv_37.innerHTML = `outcome: <code>${outcomeArrays_37}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: findIndex() V2 ----------------------------------------------
let codeArraysDiv_38 = document.getElementById("arraysCode_38");
let outcomeArraysDiv_38 = document.getElementById("arraysOutput_38");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_38 =
`<pre><code>
let varOne = [123, 23, 904, 1, 1000, 56];

function arrayFunc(var_1) {
  let index = var_1.findIndex((item) => {
    return item > 1000;
  })
  return index;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_38.innerHTML = codeArraysExample_38;

// Runs the function and adds the answer to the html page. -------
let arrOneEx38 = [123, 23, 904, 1, 1000, 56];

function arrayFuncV38(var_1) {
  let index = var_1.findIndex((item) => {
    return item > 1000;
  })
  return index;
};

let outcomeArrays_38 = arrayFuncV38(arrOneEx38);
outcomeArraysDiv_38.innerHTML = `outcome: <code>${outcomeArrays_38}</code>`;
// //////////////////////////////////////////////////////////////////////////

// Arrays: some() -----------------------------------------------------
let codeArraysDiv_39 = document.getElementById("arraysCode_39");
let outcomeArraysDiv_39 = document.getElementById("arraysOutput_39");

// Adds the example code to the html page. ----------------------------
let codeArraysExample_39 =
`<pre><code>
let varOne = [123, 23, 904, 1, 1000, 56];

function arrayFunc(var_1) {
  let index = var_1.some((item) => {
    return item > 900;
  })
  return index;
};
let outcome = arrayFunc(varOne);
</code></pre>`;

codeArraysDiv_39.innerHTML = codeArraysExample_39;

// Runs the function and adds the answer to the html page. -------
let arrOneEx39 = [123, 23, 904, 1, 1000, 56];

function arrayFuncV39(var_1) {
  let index = var_1.some((item) => {
    return item > 900;
  })
  return index;
};

let outcomeArrays_39 = arrayFuncV39(arrOneEx39);
outcomeArraysDiv_39.innerHTML = `outcome: <code>${outcomeArrays_39}</code>`;
// //////////////////////////////////////////////////////////////////////////
