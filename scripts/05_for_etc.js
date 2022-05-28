"use strict";

// for Statements etc. for  ---------------------------------------------
let codeForEtcDiv_1 = document.getElementById("forEtcCode_1");
let outcomeForEtcDiv_1 = document.getElementById("forEtcOutput_1");

// Adds the example code to the html page. ----------------------------
let codeForEtcExample_1 =
`<pre><code>
let varOne = ["h","e", "l", "l", "o"];

function loopThrough(array_1) {
  let word = "";
  for (let i = 0; i < array_1.length; i++){
    word = word + array_1[i].toUpperCase();
  }
  return word;
};
let outcome = loopThrough(varOne);
</code></pre>`;

codeForEtcDiv_1.innerHTML = codeForEtcExample_1;

// Runs the function and adds the answer to the html page. -------
let forOneEx1 = ["h","e", "l", "l", "o"];

function loopThroughV1(array_1) {
  let word = "";
  for (let i = 0; i < array_1.length; i++){
    word = word + array_1[i].toUpperCase();
  }
  return word;
};

let outcomeForEtc_1 = loopThroughV1(forOneEx1);
outcomeForEtcDiv_1.innerHTML = `outcome: <code>${outcomeForEtc_1}</code>`;
// /////////////////////////////////////////////////////////////////////

// for Statements etc. for  V2 -------------------------------------------
let codeForEtcDiv_2 = document.getElementById("forEtcCode_2");
let outcomeForEtcDiv_2 = document.getElementById("forEtcOutput_2");

// Adds the example code to the html page. ----------------------------
let codeForEtcExample_2 =
`<pre><code>
let varOne = ["h","e", "l", "l", "o"];

function loopThrough(array_1) {
  let word = "";
  for (let i = array_1.length-1; i >= 0; i--){
    word = word + array_1[i].toUpperCase();
  }
  return word;
};
let outcome = loopThrough(varOne);
</code></pre>`;

codeForEtcDiv_2.innerHTML = codeForEtcExample_2;

// Runs the function and adds the answer to the html page. -------
let forOneEx2 = ["h","e", "l", "l", "o"];

function loopThroughV2(array_1) {
  let word = "";
  for (let i = array_1.length-1; i >= 0; i--){
    word = word + array_1[i].toUpperCase();
  }
  return word;
};

let outcomeForEtc_2 = loopThroughV2(forOneEx2);
outcomeForEtcDiv_2.innerHTML = `outcome: <code>${outcomeForEtc_2}</code>`;
// /////////////////////////////////////////////////////////////////////

// for Statements etc. for  V3 -------------------------------------------
let codeForEtcDiv_3 = document.getElementById("forEtcCode_3");
let outcomeForEtcDiv_3 = document.getElementById("forEtcOutput_3");

// Adds the example code to the html page. ----------------------------
let codeForEtcExample_3 =
`<pre><code>
let varOne = [["h", "i"], ["t", "h", "e", "r", "e"]];

function loopThrough(array_1) {
  let words = "";
  for (let i = 0; i < array_1.length; i++){
    for (let j= 0; j < array_1[i].length; j++){
      words = words + array_1[i][j].toUpperCase();
    }
    words = words + " ";
  }
  return words;
}
let outcome = loopThrough(varOne);
</code></pre>`;

codeForEtcDiv_3.innerHTML = codeForEtcExample_3;

// Runs the function and adds the answer to the html page. -------
let forOneEx3 = [["h", "i"], ["t", "h", "e", "r", "e"]];

function loopThroughV3(array_1) {
  let words = "";
  for (let i = 0; i < array_1.length; i++){
    for (let j= 0; j < array_1[i].length; j++){
      words = words + array_1[i][j].toUpperCase();
    }
    words = words + " ";
  }
  return words;
};

let outcomeForEtc_3 = loopThroughV3(forOneEx3);
outcomeForEtcDiv_3.innerHTML = `outcome: <code>${outcomeForEtc_3}</code>`;
// /////////////////////////////////////////////////////////////////////

// for Statements etc. for of -------------------------------------------
let codeForEtcDiv_4 = document.getElementById("forEtcCode_4");
let outcomeForEtcDiv_4 = document.getElementById("forEtcOutput_4");

// Adds the example code to the html page. ----------------------------
let codeForEtcExample_4 =
`<pre><code>
let varOne = ["h","e", "l", "l", "o"];

function loopThrough(array_1) {
  let word = "";
  for (let letter of array_1){
    word = word + letter.toUpperCase();
  }
  return word;
}
let outcome = loopThrough(varOne);
</code></pre>`;

codeForEtcDiv_4.innerHTML = codeForEtcExample_4;

// Runs the function and adds the answer to the html page. -------
let forOneEx4 = ["h","e", "l", "l", "o"];

function loopThroughV4(array_1) {
  let word = "";
  for (let letter of array_1){
    word = word + letter.toUpperCase();
  }
  return word;
};

let outcomeForEtc_4 = loopThroughV4(forOneEx4);
outcomeForEtcDiv_4.innerHTML = `outcome: <code>${outcomeForEtc_4}</code>`;
// /////////////////////////////////////////////////////////////////////

// for Statements etc. for in -------------------------------------------
let codeForEtcDiv_5 = document.getElementById("forEtcCode_5");
let outcomeForEtcDiv_5 = document.getElementById("forEtcOutput_5");

// Adds the example code to the html page. ----------------------------
let codeForEtcExample_5 =
`<pre><code>
let varOne = {
  first: "one",
  second: "two",
  third: "three"
};

function loopThrough(object_1) {
  let numbers = "";
  for (let number in object_1){
    numbers = numbers + object_1[number] + " ";
  }
  return numbers;
}
let outcome = loopThrough(varOne);
</code></pre>`;

codeForEtcDiv_5.innerHTML = codeForEtcExample_5;

// Runs the function and adds the answer to the html page. -------
let forOneEx5 = {
  first: "one",
  second: "two",
  third: "three"
};

function loopThroughV5(object_1) {
  let numbers = "";
  for (let number in object_1){
    numbers = numbers + object_1[number] + " ";
  }
  return numbers;
};

let outcomeForEtc_5 = loopThroughV5(forOneEx5);
outcomeForEtcDiv_5.innerHTML = `outcome: <code>${outcomeForEtc_5}</code>`;
// /////////////////////////////////////////////////////////////////////

// for Statements etc. while -------------------------------------------
let codeForEtcDiv_6 = document.getElementById("forEtcCode_6");
let outcomeForEtcDiv_6 = document.getElementById("forEtcOutput_6");

// Adds the example code to the html page. ----------------------------
let codeForEtcExample_6 =
`<pre><code>
let varOne = 5;

function loopThrough(capacity) {
  let liquid = 0;
  let cup = "";
  while (liquid <= capacity){
    cup = cup + " Glug";
    liquid++;
  }
  return cup + ".";
}
let outcome = loopThrough(varOne);
</code></pre>`;

codeForEtcDiv_6.innerHTML = codeForEtcExample_6;

// Runs the function and adds the answer to the html page. -------
let forOneEx6 = 5;

function loopThroughV6(capacity) {
  let liquid = 0;
  let cup = "";
  while (liquid <= capacity){
    cup = cup + " Glug";
    liquid++;
  }
  return cup + ".";
};

let outcomeForEtc_6 = loopThroughV6(forOneEx6);
outcomeForEtcDiv_6.innerHTML = `outcome: <code>${outcomeForEtc_6}</code>`;
// /////////////////////////////////////////////////////////////////////

// for Statements etc. while -------------------------------------------
let codeForEtcDiv_7 = document.getElementById("forEtcCode_7");
let outcomeForEtcDiv_7 = document.getElementById("forEtcOutput_7");

// Adds the example code to the html page. ----------------------------
let codeForEtcExample_7 =
`<pre><code>
let varOne = 0;

function loopThrough(capacity) {
  let liquid = 0;
  let cup = "";
  while (liquid != capacity){
    cup = cup + " Glug";
    liquid++;
  }
  return cup + ".";
}
let outcome = loopThrough(varOne);
</code></pre>`;

codeForEtcDiv_7.innerHTML = codeForEtcExample_7;

// Runs the function and adds the answer to the html page. -------
let forOneEx7 = 0;

function loopThroughV7(capacity) {
  let liquid = 0;
  let cup = "";
  while (liquid != capacity){
    cup = cup + " Glug";
    liquid++;
  }
  return cup + ".";
};

let outcomeForEtc_7 = loopThroughV7(forOneEx7);
outcomeForEtcDiv_7.innerHTML = `outcome: <code>${outcomeForEtc_7}</code>`;
// /////////////////////////////////////////////////////////////////////

// for Statements etc. do while ---------------------------------------
let codeForEtcDiv_8 = document.getElementById("forEtcCode_8");
let outcomeForEtcDiv_8 = document.getElementById("forEtcOutput_8");

// Adds the example code to the html page. ----------------------------
let codeForEtcExample_8 =
`<pre><code>
let varOne = 0;

function loopThrough(capacity) {
  let liquid = 0;
  let cup = "";
  do {
    cup = cup + " Glug";
    liquid++;
  } while (liquid <= capacity);
  return cup + ".";
}
let outcome = loopThrough(varOne);
</code></pre>`;

codeForEtcDiv_8.innerHTML = codeForEtcExample_8;

// Runs the function and adds the answer to the html page. -------
let forOneEx8 = 0;

function loopThroughV8(capacity) {
  let liquid = 0;
  let cup = "";
  do {
    cup = cup + " Glug";
    liquid++;
  } while (liquid <= capacity);
  return cup + ".";
};

let outcomeForEtc_8 = loopThroughV8(forOneEx8);
outcomeForEtcDiv_8.innerHTML = `outcome: <code>${outcomeForEtc_8}</code>`;
// /////////////////////////////////////////////////////////////////////
