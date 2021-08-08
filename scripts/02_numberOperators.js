"use strict";

// Number Operators: + Plus -------------------------------------------
let codeNumOpDiv_1 = document.getElementById("numOpCode_1");
let outcomeNumOpDiv_1 = document.getElementById("numOpOutput_1");
let outcomeNumOpDiv_1b = document.getElementById("numOpOutput_1b");

// Adds the example code to the html page. ----------------------------
let codeNumOpExample_1 =
`<pre><code>
let numOne = 50;
let numTwo = 50;

function addNumbers(num_1, num_2) {
  return num_1 + num_2;
};
let outcome = addNumbers(numOne, numTwo);
</code></pre>`;

codeNumOpDiv_1.innerHTML = codeNumOpExample_1;

// Runs the function and adds the answer to the html page. -------
let numOneEx1 = 50;
let numTwoEx1 = 50;

function addNumbers(num_1, num_2) {
  return num_1 + num_2;
};

let outcomeNumOp_1 = addNumbers(numOneEx1, numTwoEx1);
let outcomeNumOp_1_Type = typeof outcomeNumOp_1;
outcomeNumOpDiv_1.innerHTML = `outcome: <code>${outcomeNumOp_1}</code>`;
outcomeNumOpDiv_1b.innerHTML = `typeof outcome: <code>${outcomeNumOp_1_Type}</code>`;
// /////////////////////////////////////////////////////////////////////

// Number Operators: + Plus V2 -----------------------------------------
let codeNumOpDiv_2 = document.getElementById("numOpCode_2");
let outcomeNumOpDiv_2 = document.getElementById("numOpOutput_2");
let outcomeNumOpDiv_2b = document.getElementById("numOpOutput_2b");

// Adds the example code to the html page. ----------------------------
let codeNumOpExample_2 =
`<pre><code>
let numOne = "50";
let numTwo = 50;

function addNumbers(num_1, num_2) {
  return num_1 + num_2;
};
let outcome = addNumbers(numOne, numTwo);
</code></pre>`;

codeNumOpDiv_2.innerHTML = codeNumOpExample_2;

// Runs the function and adds the answer to the html page. -------
let numOneEx2 = "50";
let numTwoEx2 = 50;

function addNumbersV2(num_1, num_2) {
  return num_1 + num_2;
};

let outcomeNumOp_2 = addNumbersV2(numOneEx2, numTwoEx2);
let outcomeNumOp_2_Type = typeof outcomeNumOp_2;
outcomeNumOpDiv_2.innerHTML = `outcome: <code>${outcomeNumOp_2}</code>`;
outcomeNumOpDiv_2b.innerHTML = `typeof outcome: <code>${outcomeNumOp_2_Type}</code>`;
// /////////////////////////////////////////////////////////////////////

// Number Operators: + Plus V3 ----------------------------------------
let codeNumOpDiv_3 = document.getElementById("numOpCode_3");
let outcomeNumOpDiv_3 = document.getElementById("numOpOutput_3");
let outcomeNumOpDiv_3b = document.getElementById("numOpOutput_3b");

// Adds the example code to the html page. ----------------------------
let codeNumOpExample_3 =
`<pre><code>
let numOne = 50;
let numTwo = 50;
let numThree = "50";

function addNumbers(num_1, num_2, num_3) {
  return num_1 + num_2 + num_3;
};
let outcome = addNumbers(numOne, numTwo, numThree);
</code></pre>`;

codeNumOpDiv_3.innerHTML = codeNumOpExample_3;

// Runs the function and adds the answer to the html page. -------
let numOneEx3 = 50;
let numTwoEx3 = 50;
let numThreeEx3 = "50";

function addNumbersV3(num_1, num_2, num_3) {
  return num_1 + num_2 + num_3;
};

let outcomeNumOp_3 = addNumbersV3(numOneEx3, numTwoEx3, numThreeEx3);
let outcomeNumOp_3_Type = typeof outcomeNumOp_3;
outcomeNumOpDiv_3.innerHTML = `outcome: <code>${outcomeNumOp_3}</code>`;
outcomeNumOpDiv_3b.innerHTML = `typeof outcome: <code>${outcomeNumOp_3_Type}</code>`;
// /////////////////////////////////////////////////////////////////////

// Number Operators: - Minus ------------------------------------------
let codeNumOpDiv_4 = document.getElementById("numOpCode_4");
let outcomeNumOpDiv_4 = document.getElementById("numOpOutput_4");
let outcomeNumOpDiv_4b = document.getElementById("numOpOutput_4b");

// Adds the example code to the html page. ----------------------------
let codeNumOpExample_4 =
`<pre><code>
let numOne = 50;
let numTwo = 25;

function takeNumbers(num_1, num_2) {
  return num_1 - num_2;
};
let outcome = takeNumbers(numOne, numTwo);
</code></pre>`;

codeNumOpDiv_4.innerHTML = codeNumOpExample_4;

// Runs the function and adds the answer to the html page. -------
let numOneEx4 = 50;
let numTwoEx4 = 25;

function takeNumbers(num_1, num_2) {
  return num_1 - num_2;
};

let outcomeNumOp_4 = takeNumbers(numOneEx4, numTwoEx4);
let outcomeNumOp_4_Type = typeof outcomeNumOp_4;
outcomeNumOpDiv_4.innerHTML = `outcome: <code>${outcomeNumOp_4}</code>`;
outcomeNumOpDiv_4b.innerHTML = `typeof outcome: <code>${outcomeNumOp_4_Type}</code>`;
// /////////////////////////////////////////////////////////////////////

// Number Operators: - Minus V2 ----------------------------------------
let codeNumOpDiv_5 = document.getElementById("numOpCode_5");
let outcomeNumOpDiv_5 = document.getElementById("numOpOutput_5");
let outcomeNumOpDiv_5b = document.getElementById("numOpOutput_5b");

// Adds the example code to the html page. ----------------------------
let codeNumOpExample_5 =
`<pre><code>
let numOne = 50;
let numTwo = "25";

function takeNumbers(num_1, num_2) {
  return num_1 - num_2;
};
let outcome = takeNumbers(numOne, numTwo);
</code></pre>`;

codeNumOpDiv_5.innerHTML = codeNumOpExample_5;

// Runs the function and adds the answer to the html page. -------
let numOneEx5 = 50;
let numTwoEx5 = "25";

function takeNumbersV2(num_1, num_2) {
  return num_1 - num_2;
};

let outcomeNumOp_5 = takeNumbersV2(numOneEx5, numTwoEx5);
let outcomeNumOp_5_Type = typeof outcomeNumOp_5;
outcomeNumOpDiv_5.innerHTML = `outcome: <code>${outcomeNumOp_5}</code>`;
outcomeNumOpDiv_5b.innerHTML = `typeof outcome: <code>${outcomeNumOp_5_Type}</code>`;
// /////////////////////////////////////////////////////////////////////

// Number Operators: - Minus V3 ----------------------------------------
let codeNumOpDiv_6 = document.getElementById("numOpCode_6");
let outcomeNumOpDiv_6 = document.getElementById("numOpOutput_6");
let outcomeNumOpDiv_6b = document.getElementById("numOpOutput_6b");

// Adds the example code to the html page. ----------------------------
let codeNumOpExample_6 =
`<pre><code>
let numOne = 50;
let numTwo = "two";

function takeNumbers(num_1, num_2) {
  return num_1 - num_2;
};
let outcome = takeNumbers(numOne, numTwo);
</code></pre>`;

codeNumOpDiv_6.innerHTML = codeNumOpExample_6;

// Runs the function and adds the answer to the html page. -------
let numOneEx6 = 50;
let numTwoEx6 = "two";

function takeNumbersV2(num_1, num_2) {
  return num_1 - num_2;
};

let outcomeNumOp_6 = takeNumbersV2(numOneEx6, numTwoEx6);
let outcomeNumOp_6_Type = typeof outcomeNumOp_6;
outcomeNumOpDiv_6.innerHTML = `outcome: <code>${outcomeNumOp_6}</code>`;
outcomeNumOpDiv_6b.innerHTML = `typeof outcome: <code>${outcomeNumOp_6_Type}</code>`;
// /////////////////////////////////////////////////////////////////////

// Number Operators: * Multiply ----------------------------------------
let codeNumOpDiv_7 = document.getElementById("numOpCode_7");
let outcomeNumOpDiv_7 = document.getElementById("numOpOutput_7");
let outcomeNumOpDiv_7b = document.getElementById("numOpOutput_7b");

// Adds the example code to the html page. ----------------------------
let codeNumOpExample_7 =
`<pre><code>
let numOne = 50;
let numTwo = "2";

function multiplyNumbers(num_1, num_2) {
  return num_1 * num_2;
};
let outcome = multiplyNumbers(numOne, numTwo);
</code></pre>`;

codeNumOpDiv_7.innerHTML = codeNumOpExample_7;

// Runs the function and adds the answer to the html page. -------
let numOneEx7 = 50;
let numTwoEx7 = "2";

function multiplyNumbers(num_1, num_2) {
  return num_1 * num_2;
};

let outcomeNumOp_7 = multiplyNumbers(numOneEx7, numTwoEx7);
let outcomeNumOp_7_Type = typeof outcomeNumOp_7;
outcomeNumOpDiv_7.innerHTML = `outcome: <code>${outcomeNumOp_7}</code>`;
outcomeNumOpDiv_7b.innerHTML = `typeof outcome: <code>${outcomeNumOp_7_Type}</code>`;
// /////////////////////////////////////////////////////////////////////

// Number Operators: / Divide ----------------------------------------
let codeNumOpDiv_8 = document.getElementById("numOpCode_8");
let outcomeNumOpDiv_8 = document.getElementById("numOpOutput_8");
let outcomeNumOpDiv_8b = document.getElementById("numOpOutput_8b");

// Adds the example code to the html page. ----------------------------
let codeNumOpExample_8 =
`<pre><code>
let numOne = 50;
let numTwo = "2";

function divideNumbers(num_1, num_2) {
  return num_1 / num_2;
};
let outcome = divideNumbers(numOne, numTwo);
</code></pre>`;

codeNumOpDiv_8.innerHTML = codeNumOpExample_8;

// Runs the function and adds the answer to the html page. -------
let numOneEx8 = 50;
let numTwoEx8 = "2";

function divideNumbers(num_1, num_2) {
  return num_1 / num_2;
};

let outcomeNumOp_8 = divideNumbers(numOneEx8, numTwoEx8);
let outcomeNumOp_8_Type = typeof outcomeNumOp_8;
outcomeNumOpDiv_8.innerHTML = `outcome: <code>${outcomeNumOp_8}</code>`;
outcomeNumOpDiv_8b.innerHTML = `typeof outcome: <code>${outcomeNumOp_8_Type}</code>`;
// /////////////////////////////////////////////////////////////////////

// Number Operators: % Remainder ----------------------------------------
let codeNumOpDiv_9 = document.getElementById("numOpCode_9");
let outcomeNumOpDiv_9 = document.getElementById("numOpOutput_9");

// Adds the example code to the html page. ----------------------------
let codeNumOpExample_9 =
`<pre><code>
let numOne = 10;
let numTwo = 2;

function getRemainder(num_1, num_2) {
  return num_1 % num_2;
};
let outcome = getRemainder(numOne, numTwo);
</code></pre>`;

codeNumOpDiv_9.innerHTML = codeNumOpExample_9;

// Runs the function and adds the answer to the html page. -------
let numOneEx9 = 10;
let numTwoEx9 = 2;

function getRemainder(num_1, num_2) {
  return num_1 % num_2;
};

let outcomeNumOp_9 = getRemainder(numOneEx9, numTwoEx9);
outcomeNumOpDiv_9.innerHTML = `outcome: <code>${outcomeNumOp_9}</code>`;
// /////////////////////////////////////////////////////////////////////

// Number Operators: % Remainder V2 -------------------------------------
let codeNumOpDiv_10 = document.getElementById("numOpCode_10");
let outcomeNumOpDiv_10 = document.getElementById("numOpOutput_10");

// Adds the example code to the html page. ----------------------------
let codeNumOpExample_10 =
`<pre><code>
let numOne = 10;
let numTwo = 3;

function getRemainder(num_1, num_2) {
  return num_1 % num_2;
};
let outcome = getRemainder(numOne, numTwo);
</code></pre>`;

codeNumOpDiv_10.innerHTML = codeNumOpExample_10;

// Runs the function and adds the answer to the html page. -------
let numOneEx10 = 10;
let numTwoEx10 = 3;

function getRemainderV2(num_1, num_2) {
  return num_1 % num_2;
};

let outcomeNumOp_10 = getRemainderV2(numOneEx10, numTwoEx10);
outcomeNumOpDiv_10.innerHTML = `outcome: <code>${outcomeNumOp_10}</code>`;
// /////////////////////////////////////////////////////////////////////

// Number Operators: ** Exponential ----------------------------------
let codeNumOpDiv_11 = document.getElementById("numOpCode_11");
let outcomeNumOpDiv_11 = document.getElementById("numOpOutput_11");

// Adds the example code to the html page. ----------------------------
let codeNumOpExample_11 =
`<pre><code>
let numOne = 3;
let numTwo = 3;

function useExponent(num_1, num_2) {
  return num_1 ** num_2;
};
let outcome = useExponent(numOne, numTwo);
</code></pre>`;

codeNumOpDiv_11.innerHTML = codeNumOpExample_11;

// Runs the function and adds the answer to the html page. -------
let numOneEx11 = 3;
let numTwoEx11 = 3;

function useExponent(num_1, num_2) {
  return num_1 ** num_2;
};

let outcomeNumOp_11 = useExponent(numOneEx11, numTwoEx11);
outcomeNumOpDiv_11.innerHTML = `outcome: <code>${outcomeNumOp_11}</code>`;
// /////////////////////////////////////////////////////////////////////

// Number Operators: ** Exponential V2 ---------------------------------
let codeNumOpDiv_12 = document.getElementById("numOpCode_12");
let outcomeNumOpDiv_12 = document.getElementById("numOpOutput_12");

// Adds the example code to the html page. ----------------------------
let codeNumOpExample_12 =
`<pre><code>
let numOne = 3;
let numTwo = 1/3;

function useExponent(num_1, num_2) {
  return num_1 ** num_2;
};
let outcome = useExponent(numOne, numTwo);
</code></pre>`;

codeNumOpDiv_12.innerHTML = codeNumOpExample_12;

// Runs the function and adds the answer to the html page. -------
let numOneEx12 = 3;
let numTwoEx12 = 1/3;

function useExponentV2(num_1, num_2) {
  return num_1 ** num_2;
};

let outcomeNumOp_12 = useExponentV2(numOneEx12, numTwoEx12);
outcomeNumOpDiv_12.innerHTML = `outcome: <code>${outcomeNumOp_12}</code>`;
// /////////////////////////////////////////////////////////////////////

// Number Operators: ++ Increment -------------------------------------
let codeNumOpDiv_13 = document.getElementById("numOpCode_13");
let outcomeNumOpDiv_13 = document.getElementById("numOpOutput_13");

// Adds the example code to the html page. ----------------------------
let codeNumOpExample_13 =
`<pre><code>
let numOne = 3;

function useIncrement(num_1) {
  return ++num_1;
};
let outcome = useIncrement(numOne);
</code></pre>`;

codeNumOpDiv_13.innerHTML = codeNumOpExample_13;

// Runs the function and adds the answer to the html page. -------
let numOneEx13 = 3;

function useIncrement(num_1) {
  return ++num_1;
};

let outcomeNumOp_13 = useIncrement(numOneEx13);
outcomeNumOpDiv_13.innerHTML = `outcome: <code>${outcomeNumOp_13}</code>`;
// /////////////////////////////////////////////////////////////////////

// Number Operators: ++ Increment -------------------------------------
let codeNumOpDiv_14 = document.getElementById("numOpCode_14");
let outcomeNumOpDiv_14 = document.getElementById("numOpOutput_14");

// Adds the example code to the html page. ----------------------------
let codeNumOpExample_14 =
`<pre><code>
let numOne = 3;

function useIncrement(num_1) {
  return num_1++;
};
let outcome = useIncrement(numOne);
</code></pre>`;

codeNumOpDiv_14.innerHTML = codeNumOpExample_14;

// Runs the function and adds the answer to the html page. -------
let numOneEx14 = 3;

function useIncrementV2(num_1) {
  return num_1++;
};

let outcomeNumOp_14 = useIncrementV2(numOneEx14);
outcomeNumOpDiv_14.innerHTML = `outcome: <code>${outcomeNumOp_14}</code>`;
// /////////////////////////////////////////////////////////////////////

// Number Operators: -- Decrement -------------------------------------
let codeNumOpDiv_15 = document.getElementById("numOpCode_15");
let outcomeNumOpDiv_15 = document.getElementById("numOpOutput_15");

// Adds the example code to the html page. ----------------------------
let codeNumOpExample_15 =
`<pre><code>
let numOne = 3;

function useDecrement(num_1) {
  return --num_1;
};
let outcome = useDecrement(numOne);
</code></pre>`;

codeNumOpDiv_15.innerHTML = codeNumOpExample_15;

// Runs the function and adds the answer to the html page. -------
let numOneEx15 = 3;

function useDecrement(num_1) {
  return --num_1;
};

let outcomeNumOp_15 = useDecrement(numOneEx15);
outcomeNumOpDiv_15.innerHTML = `outcome: <code>${outcomeNumOp_15}</code>`;
// /////////////////////////////////////////////////////////////////////

// Number Operators: -- Decrement V2 -----------------------------------
let codeNumOpDiv_16 = document.getElementById("numOpCode_16");
let outcomeNumOpDiv_16 = document.getElementById("numOpOutput_16");

// Adds the example code to the html page. ----------------------------
let codeNumOpExample_16 =
`<pre><code>
let numOne = 3;

function useDecrement(num_1) {
  return num_1--;
};
let outcome = useDecrement(numOne);
</code></pre>`;

codeNumOpDiv_16.innerHTML = codeNumOpExample_16;

// Runs the function and adds the answer to the html page. -------
let numOneEx16 = 3;

function useDecrementV2(num_1) {
  return num_1--;
};

let outcomeNumOp_16 = useDecrementV2(numOneEx16);
outcomeNumOpDiv_16.innerHTML = `outcome: <code>${outcomeNumOp_16}</code>`;
// /////////////////////////////////////////////////////////////////////
