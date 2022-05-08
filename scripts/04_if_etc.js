"use strict";

// if Statements etc.: if ----------------------------------------------
let codeIfEtcDiv_1 = document.getElementById("ifEtcCode_1");
let outcomeIfEtcDiv_1 = document.getElementById("ifEtcOutput_1");

// Adds the example code to the html page. ----------------------------
let codeIfEtcExample_1 =
`<pre><code>
let varOne = 2;

function checkValue(var_1) {
  if (var_1 > 3){
    return "I'm over 3!";
  };
};
let outcome = checkValue(varOne);
</code></pre>`;

codeIfEtcDiv_1.innerHTML = codeIfEtcExample_1;

// Runs the function and adds the answer to the html page. -------
let ifEtcEx1 = 2;

function checkValue(var_1) {
  if (var_1 > 3){
    return "I'm over 3!";
  };
};

let outcomeIfEtc_1 = checkValue(ifEtcEx1);
outcomeIfEtcDiv_1.innerHTML = `outcome: <code>${outcomeIfEtc_1}</code>`;
// /////////////////////////////////////////////////////////////////////

// if Statements etc.: if ----------------------------------------------
let codeIfEtcDiv_2 = document.getElementById("ifEtcCode_2");
let outcomeIfEtcDiv_2 = document.getElementById("ifEtcOutput_2");

// Adds the example code to the html page. ----------------------------
let codeIfEtcExample_2 =
`<pre><code>
let varOne = 4;

function checkValue(var_1) {
  if (var_1 > 3){
    return "I'm over 3!";
  };
};
let outcome = checkValue(varOne);
</code></pre>`;

codeIfEtcDiv_2.innerHTML = codeIfEtcExample_2;

// Runs the function and adds the answer to the html page. -------
let ifEtcEx2 = 4;

function checkValueV2(var_1) {
  if (var_1 > 3){
    return "I'm over 3!";
  };
};

let outcomeIfEtc_2 = checkValueV2(ifEtcEx2);
outcomeIfEtcDiv_2.innerHTML = `outcome: <code>${outcomeIfEtc_2}</code>`;
// /////////////////////////////////////////////////////////////////////

// if Statements etc.: if & else ----------------------------------------
let codeIfEtcDiv_3 = document.getElementById("ifEtcCode_3");
let outcomeIfEtcDiv_3 = document.getElementById("ifEtcOutput_3");

// Adds the example code to the html page. ------------------------------
let codeIfEtcExample_3 =
`<pre><code>
let varOne = 2;

function checkValue(var_1) {
  if (var_1 > 3){
    return "I'm over 3!";
  } else {
    return "Not over 3!";
  };
};
let outcome = checkValue(varOne);
</code></pre>`;

codeIfEtcDiv_3.innerHTML = codeIfEtcExample_3;

// Runs the function and adds the answer to the html page. -------
let ifEtcEx3 = 2;

function checkValueV3(var_1) {
  if (var_1 > 3){
    return "I'm over 3!";
  } else {
    return "Not over 3!";
  };
};

let outcomeIfEtc_3 = checkValueV3(ifEtcEx3);
outcomeIfEtcDiv_3.innerHTML = `outcome: <code>${outcomeIfEtc_3}</code>`;
// /////////////////////////////////////////////////////////////////////

// if Statements etc.: if, else if & else ----------------------------------------
let codeIfEtcDiv_4 = document.getElementById("ifEtcCode_4");
let outcomeIfEtcDiv_4 = document.getElementById("ifEtcOutput_4");

// Adds the example code to the html page. ------------------------------
let codeIfEtcExample_4 =
`<pre><code>
let varOne = 3;

function checkValue(var_1) {
  if (var_1 > 3){
    return "I'm over 3!";
  } else if (var_1 == 3) {
    return "I'm 3!";
  } else {
    return "Not over 3!";
  };
};
let outcome = checkValue(varOne);
</code></pre>`;

codeIfEtcDiv_4.innerHTML = codeIfEtcExample_4;

// Runs the function and adds the answer to the html page. -------
let ifEtcEx4 = 3;

function checkValueV4(var_1) {
  if (var_1 > 3){
    return "I'm over 3!";
  } else if (var_1 == 3) {
    return "I'm 3!";
  } else {
    return "Not over 3!";
  };
};

let outcomeIfEtc_4 = checkValueV4(ifEtcEx4);
outcomeIfEtcDiv_4.innerHTML = `outcome: <code>${outcomeIfEtc_4}</code>`;
// /////////////////////////////////////////////////////////////////////

// if Statements etc.: && (and) ----------------------------------------
let codeIfEtcDiv_5 = document.getElementById("ifEtcCode_5");
let outcomeIfEtcDiv_5 = document.getElementById("ifEtcOutput_5");

// Adds the example code to the html page. ------------------------------
let codeIfEtcExample_5 =
`<pre><code>
let varOne = 3;
let varTwo = 4;

function checkValue(var_1, var_2) {
  if (var_1 > 3 && var_2 > 3){
    return "Both!";
  } else {
    return "Nope!";
  };
};
let outcome = checkValue(varOne, varTwo);
</code></pre>`;

codeIfEtcDiv_5.innerHTML = codeIfEtcExample_5;

// Runs the function and adds the answer to the html page. -------
let ifEtcOneEx5 = 3;
let ifEtcTwoEx5 = 4;

function checkValueV5(var_1, var_2) {
  if (var_1 > 3 && var_2 > 3){
    return "Both!";
  } else {
    return "Nope!";
  };
};

let outcomeIfEtc_5 = checkValueV5(ifEtcOneEx5, ifEtcTwoEx5);
outcomeIfEtcDiv_5.innerHTML = `outcome: <code>${outcomeIfEtc_5}</code>`;
// /////////////////////////////////////////////////////////////////////

// if Statements etc.: || (or) ----------------------------------------
let codeIfEtcDiv_6 = document.getElementById("ifEtcCode_6");
let outcomeIfEtcDiv_6 = document.getElementById("ifEtcOutput_6");

// Adds the example code to the html page. ------------------------------
let codeIfEtcExample_6 =
`<pre><code>
let varOne = 3;
let varTwo = 4;

function checkValue(var_1, var_2) {
  if (var_1 > 3 || var_2 > 3){
    return "At least one is!";
  } else {
    return "Nope!";
  };
};
let outcome = checkValue(varOne, varTwo);
</code></pre>`;

codeIfEtcDiv_6.innerHTML = codeIfEtcExample_6;

// Runs the function and adds the answer to the html page. -------
let ifEtcOneEx6 = 3;
let ifEtcTwoEx6 = 4;

function checkValueV6(var_1, var_2) {
  if (var_1 > 3 || var_2 > 3){
    return "At least one is!";
  } else {
    return "Nope!";
  };
};

let outcomeIfEtc_6 = checkValueV6(ifEtcOneEx6, ifEtcTwoEx6);
outcomeIfEtcDiv_6.innerHTML = `outcome: <code>${outcomeIfEtc_6}</code>`;
// /////////////////////////////////////////////////////////////////////

// if Statements etc.: Ternary Operator ----------------------------------------
let codeIfEtcDiv_7 = document.getElementById("ifEtcCode_7");
let outcomeIfEtcDiv_7 = document.getElementById("ifEtcOutput_7");

// Adds the example code to the html page. ------------------------------
let codeIfEtcExample_7 =
`<pre><code>
let varOne = 3;
let varTwo = 4;

function checkValue(var_1, var_2) {
  return (var_1 > var_2) ? "Yes!" : "No";
};
let outcome = checkValue(varOne, varTwo);
</code></pre>`;

codeIfEtcDiv_7.innerHTML = codeIfEtcExample_7;

// Runs the function and adds the answer to the html page. -------
let ifEtcOneEx7 = 3;
let ifEtcTwoEx7 = 4;

function checkValueV7(var_1, var_2) {
  return (var_1 > var_2) ? "Yes!" : "No";
};

let outcomeIfEtc_7 = checkValueV7(ifEtcOneEx7, ifEtcTwoEx7);
outcomeIfEtcDiv_7.innerHTML = `outcome: <code>${outcomeIfEtc_7}</code>`;
// /////////////////////////////////////////////////////////////////////

// if Statements etc.: Ternary Operator V2 ------------------------------------
let codeIfEtcDiv_8 = document.getElementById("ifEtcCode_8");
let outcomeIfEtcDiv_8 = document.getElementById("ifEtcOutput_8");

// Adds the example code to the html page. ------------------------------
let codeIfEtcExample_8 =
`<pre><code>
let varOne = 5;
let varTwo = 4;

function checkValue(var_1, var_2) {
  return (var_1 > var_2) ? "Yes!" : "No";
};
let outcome = checkValue(varOne, varTwo);
</code></pre>`;

codeIfEtcDiv_8.innerHTML = codeIfEtcExample_8;

// Runs the function and adds the answer to the html page. -------
let ifEtcOneEx8 = 5;
let ifEtcTwoEx8 = 4;

function checkValueV8(var_1, var_2) {
  return (var_1 > var_2) ? "Yes!" : "No";
};

let outcomeIfEtc_8 = checkValueV8(ifEtcOneEx8, ifEtcTwoEx8);
outcomeIfEtcDiv_8.innerHTML = `outcome: <code>${outcomeIfEtc_8}</code>`;
// /////////////////////////////////////////////////////////////////////

// if Statements etc.: Ternary Operator V3 ------------------------------------
let codeIfEtcDiv_9 = document.getElementById("ifEtcCode_9");
let outcomeIfEtcDiv_9 = document.getElementById("ifEtcOutput_9");

// Adds the example code to the html page. ------------------------------
let codeIfEtcExample_9 =
`<pre><code>
let varOne = 5;
let varTwo = 4;

function checkValue(var_1, var_2) {
  return (var_1 == var_2) ? "Matching!"
       : (var_1 < var_2) ? "The first is less"
       : (var_1 > var_2) ? "The first is more"
       : "Something else!";
};
let outcome = checkValue(varOne, varTwo);
</code></pre>`;

codeIfEtcDiv_9.innerHTML = codeIfEtcExample_9;

// Runs the function and adds the answer to the html page. -------
let ifEtcOneEx9 = 5;
let ifEtcTwoEx9 = 4;

function checkValueV9(var_1, var_2) {
  return (var_1 == var_2) ? "Matching!"
       : (var_1 < var_2) ? "The first is less"
       : (var_1 > var_2) ? "The first is more"
       : "Something else!";
};

let outcomeIfEtc_9 = checkValueV9(ifEtcOneEx9, ifEtcTwoEx9);
outcomeIfEtcDiv_9.innerHTML = `outcome: <code>${outcomeIfEtc_9}</code>`;
// /////////////////////////////////////////////////////////////////////

// if Statements etc.: Switch  ------------------------------------------
let codeIfEtcDiv_10 = document.getElementById("ifEtcCode_10");
let outcomeIfEtcDiv_10 = document.getElementById("ifEtcOutput_10");

// Adds the example code to the html page. ------------------------------
let codeIfEtcExample_10 =
`<pre><code>
let varOne = "apples";

function checkValue(var_1) {
  let price;
  switch (var_1){
    case "bananas" : price = 1.05;
    break;
    case "apples" : price = 1.25;
    break;
    case "mangoes" : price = 1.75;
    break;
    default:
    price = "unknown";
  }
  return price;
};
let outcome = checkValue(varOne);
</code></pre>`;

codeIfEtcDiv_10.innerHTML = codeIfEtcExample_10;

// Runs the function and adds the answer to the html page. -------
let ifEtcOneEx10 = "apples";

function checkValueV10(var_1) {
  let price;
  switch (var_1){
    case "bananas" : price = 1.05;
    break;
    case "apples" : price = 1.25;
    break;
    case "mangoes" : price = 1.75;
    break;
    default:
    price = "unknown";
  }
  return price;
};

let outcomeIfEtc_10 = checkValueV10(ifEtcOneEx10);
outcomeIfEtcDiv_10.innerHTML = `outcome: <code>${outcomeIfEtc_10}</code>`;
// /////////////////////////////////////////////////////////////////////

// if Statements etc.: Switch V2 ----------------------------------------
let codeIfEtcDiv_11 = document.getElementById("ifEtcCode_11");
let outcomeIfEtcDiv_11 = document.getElementById("ifEtcOutput_11");

// Adds the example code to the html page. ------------------------------
let codeIfEtcExample_11 =
`<pre><code>
let varOne = "pineapples";

function checkValue(var_1) {
  let price;
  switch (var_1){
    case "bananas" : price = 1.05;
    break;
    case "apples" : price = 1.25;
    break;
    case "mangoes" : price = 1.75;
    break;
    default:
    price = "unknown";
  }
  return price;
};
let outcome = checkValue(varOne);
</code></pre>`;

codeIfEtcDiv_11.innerHTML = codeIfEtcExample_11;

// Runs the function and adds the answer to the html page. -------
let ifEtcOneEx11 = "pineapples";

function checkValueV11(var_1) {
  let price;
  switch (var_1){
    case "bananas" : price = 1.05;
    break;
    case "apples" : price = 1.25;
    break;
    case "mangoes" : price = 1.75;
    break;
    default:
    price = "unknown";
  }
  return price;
};

let outcomeIfEtc_11 = checkValueV11(ifEtcOneEx11);
outcomeIfEtcDiv_11.innerHTML = `outcome: <code>${outcomeIfEtc_11}</code>`;
// /////////////////////////////////////////////////////////////////////

// if Statements etc.: Switch V3 ----------------------------------------
let codeIfEtcDiv_12 = document.getElementById("ifEtcCode_12");
let outcomeIfEtcDiv_12 = document.getElementById("ifEtcOutput_12");

// Adds the example code to the html page. ------------------------------
let codeIfEtcExample_12 =
`<pre><code>
let varOne = "pineapples";

function checkValue(var_1) {
  let price;
  switch (var_1){
    case "bananas" : price = 1.05;
    break;
    case "apples" : price = 1.25;
    break;
    case "mangoes" :
    case "pineapples" :
    case "grapes" :
    price = 1.75;
    break;
    default:
    price = "unknown";
  }
  return price;
};
let outcome = checkValue(varOne);
</code></pre>`;

codeIfEtcDiv_12.innerHTML = codeIfEtcExample_12;

// Runs the function and adds the answer to the html page. -------
let ifEtcOneEx12 = "pineapples";

function checkValueV12(var_1) {
  let price;
  switch (var_1){
    case "bananas" : price = 1.05;
    break;
    case "apples" : price = 1.25;
    break;
    case "mangoes" :
    case "pineapples" :
    case "grapes" :
    price = 1.75;
    break;
    default:
    price = "unknown";
  }
  return price;
};

let outcomeIfEtc_12 = checkValueV12(ifEtcOneEx12);
outcomeIfEtcDiv_12.innerHTML = `outcome: <code>${outcomeIfEtc_12}</code>`;
// /////////////////////////////////////////////////////////////////////
