"use strict";

// Objects: Accessing Properties V1 -------------------------------------
let codeObjectsDiv_1 = document.getElementById("objectsCode_1");
let outcomeObjectsDiv_1 = document.getElementById("objectsOutput_1");

// Adds the example code to the html page. ----------------------------
let codeObjectsExample_1 =
`<pre><code>
let varOne = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],
  address: {
    house_number: 22,
    street_name: "Main Street",
    town: "Madeupville",
    "post code": "ABC 123"
  };
};

function objectFunc(var_1) {
  return var_1.age;
};
let outcome = objectFunc(varOne);
</code></pre>`;

codeObjectsDiv_1.innerHTML = codeObjectsExample_1;

// Runs the function and adds the answer to the html page. -------
let objOneEx1 = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],
  address: {
    house_number: 22,
    street_name: "Main Street",
    town: "Madeupville",
    "post code": "ABC 123"
  }
};

function objectFuncV1(var_1) {
  return var_1.age;
};

let outcomeObjects_1 = objectFuncV1(objOneEx1);
outcomeObjectsDiv_1.innerHTML = `outcome: <code>${outcomeObjects_1}</code>`;
// /////////////////////////////////////////////////////////////////////////

// Objects: Accessing Properties V2 -------------------------------------
let codeObjectsDiv_2 = document.getElementById("objectsCode_2");
let outcomeObjectsDiv_2 = document.getElementById("objectsOutput_2");

// Adds the example code to the html page. ----------------------------
let codeObjectsExample_2 =
`<pre><code>
let varOne = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],
  address: {
    house_number: 22,
    street_name: "Main Street",
    town: "Madeupville",
    "post code": "ABC 123"
  };
};

function objectFunc(var_1) {
  return var_1["gender"];
};
let outcome = objectFunc(varOne);
</code></pre>`;

codeObjectsDiv_2.innerHTML = codeObjectsExample_2;

// Runs the function and adds the answer to the html page. -------
let objOneEx2 = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],
  address: {
    house_number: 22,
    street_name: "Main Street",
    town: "Madeupville",
    "post code": "ABC 123"
  }
};

function objectFuncV2(var_1) {
  return var_1["gender"];
};

let outcomeObjects_2 = objectFuncV2(objOneEx2);
outcomeObjectsDiv_2.innerHTML = `outcome: <code>${outcomeObjects_2}</code>`;
// /////////////////////////////////////////////////////////////////////////

// Objects: Accessing Properties V3 -------------------------------------
let codeObjectsDiv_3 = document.getElementById("objectsCode_3");
let outcomeObjectsDiv_3 = document.getElementById("objectsOutput_3");

// Adds the example code to the html page. ----------------------------
let codeObjectsExample_3 =
`<pre><code>
let varOne = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],
  address: {
    house_number: 22,
    street_name: "Main Street",
    town: "Madeupville",
    "post code": "ABC 123"
  };
};

function objectFunc(var_1) {
  return var_1.pets[1];
};
let outcome = objectFunc(varOne);
</code></pre>`;

codeObjectsDiv_3.innerHTML = codeObjectsExample_3;

// Runs the function and adds the answer to the html page. -------
let objOneEx3 = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],
  address: {
    house_number: 22,
    street_name: "Main Street",
    town: "Madeupville",
    "post code": "ABC 123"
  }
};

function objectFuncV3(var_1) {
  return var_1.pets[1];
};

let outcomeObjects_3 = objectFuncV3(objOneEx3);
outcomeObjectsDiv_3.innerHTML = `outcome: <code>${outcomeObjects_3}</code>`;
// /////////////////////////////////////////////////////////////////////////

// Objects: Accessing Properties V4 -------------------------------------
let codeObjectsDiv_4 = document.getElementById("objectsCode_4");
let outcomeObjectsDiv_4 = document.getElementById("objectsOutput_4");

// Adds the example code to the html page. ----------------------------
let codeObjectsExample_4 =
`<pre><code>
let varOne = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],
  address: {
    house_number: 22,
    street_name: "Main Street",
    town: "Madeupville",
    "post code": "ABC 123"
  };
};

function objectFunc(var_1) {
  return var_1.address["post code"];
};
let outcome = objectFunc(varOne);
</code></pre>`;

codeObjectsDiv_4.innerHTML = codeObjectsExample_4;

// Runs the function and adds the answer to the html page. -------
let objOneEx4 = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],
  address: {
    house_number: 22,
    street_name: "Main Street",
    town: "Madeupville",
    "post code": "ABC 123"
  }
};

function objectFuncV4(var_1) {
  return var_1.address["post code"];
};

let outcomeObjects_4 = objectFuncV4(objOneEx4);
outcomeObjectsDiv_4.innerHTML = `outcome: <code>${outcomeObjects_4}</code>`;
// /////////////////////////////////////////////////////////////////////////

// Objects: Adding Properties --------------------------------------
let codeObjectsDiv_5 = document.getElementById("objectsCode_5");
let outcomeObjectsDiv_5 = document.getElementById("objectsOutput_5");

// Adds the example code to the html page. ----------------------------
let codeObjectsExample_5 =
`<pre><code>
let varOne = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"]
};

function objectFunc(var_1) {
  var_1.nationality = "Mexican";
  return var_1.nationality;
};
let outcome = objectFunc(varOne);
</code></pre>`;

codeObjectsDiv_5.innerHTML = codeObjectsExample_5;

// Runs the function and adds the answer to the html page. -------
let objOneEx5 = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"]
};

function objectFuncV5(var_1) {
  var_1.nationality = "Mexican";
  return var_1.nationality;
};

let outcomeObjects_5 = objectFuncV5(objOneEx5);
outcomeObjectsDiv_5.innerHTML = `outcome: <code>${outcomeObjects_5}</code>`;
// /////////////////////////////////////////////////////////////////////////

// Objects: Deleting Properties --------------------------------------
let codeObjectsDiv_6 = document.getElementById("objectsCode_6");
let outcomeObjectsDiv_6 = document.getElementById("objectsOutput_6");

// Adds the example code to the html page. ----------------------------
let codeObjectsExample_6 =
`<pre><code>
let varOne = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"]
};

function objectFunc(var_1) {
  delete var_1.age;
  return var_1.age;
};
let outcome = objectFunc(varOne);
</code></pre>`;

codeObjectsDiv_6.innerHTML = codeObjectsExample_6;

// Runs the function and adds the answer to the html page. -------
let objOneEx6 = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"]
};

function objectFuncV6(var_1) {
  delete var_1.age;
  return var_1.age;
};

let outcomeObjects_6 = objectFuncV6(objOneEx6);
outcomeObjectsDiv_6.innerHTML = `outcome: <code>${outcomeObjects_6}</code>`;
// /////////////////////////////////////////////////////////////////////////

// Objects: Methods ---------------------------------------------------
let codeObjectsDiv_7 = document.getElementById("objectsCode_7");
let outcomeObjectsDiv_7 = document.getElementById("objectsOutput_7");

// Adds the example code to the html page. ----------------------------
let codeObjectsExample_7 =
`<pre><code>
let varOne = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],
  howOld : function(){
    return \`\${this.age} years old!\`
  }
};

function objectFunc(var_1) {
  return var_1.howOld();
};
let outcome = objectFunc(varOne);
</code></pre>`;

codeObjectsDiv_7.innerHTML = codeObjectsExample_7;

// Runs the function and adds the answer to the html page. -------
let objOneEx7 = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],
  howOld : function(){
    return `${this.age} years old!`
  }
};

function objectFuncV7(var_1) {
  return var_1.howOld();
};

let outcomeObjects_7 = objectFuncV7(objOneEx7);
outcomeObjectsDiv_7.innerHTML = `outcome: <code>${outcomeObjects_7}</code>`;
// /////////////////////////////////////////////////////////////////////////

// Objects: Getters ---------------------------------------------------
let codeObjectsDiv_8 = document.getElementById("objectsCode_8");
let outcomeObjectsDiv_8 = document.getElementById("objectsOutput_8");

// Adds the example code to the html page. ----------------------------
let codeObjectsExample_8 =
`<pre><code>
let varOne = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],

  get howOld(){
    return \`\${this.age} years old!\`
  }
};

function objectFunc(var_1) {
  return var_1.howOld;
};
let outcome = objectFunc(varOne);
</code></pre>`;

codeObjectsDiv_8.innerHTML = codeObjectsExample_8;

// Runs the function and adds the answer to the html page. -------
let objOneEx8 = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],

  get howOld(){
    return `${this.age} years old!`
  }
};

function objectFuncV8(var_1) {
  return var_1.howOld;
};

let outcomeObjects_8 = objectFuncV8(objOneEx8);
outcomeObjectsDiv_8.innerHTML = `outcome: <code>${outcomeObjects_8}</code>`;
// /////////////////////////////////////////////////////////////////////////

// Objects: Setters ---------------------------------------------------
let codeObjectsDiv_9 = document.getElementById("objectsCode_9");
let outcomeObjectsDiv_9 = document.getElementById("objectsOutput_9");

// Adds the example code to the html page. ----------------------------
let codeObjectsExample_9 =
`<pre><code>
let varOne = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],

  get howOld(){
    return \`\${this.age} years old!\`
  },

  set howOld(years){
    this.age = years;
  }
};

function objectFunc(var_1) {
  var_1.howOld = 51;
  return var_1.howOld;
};
let outcome = objectFunc(varOne);
</code></pre>`;

codeObjectsDiv_9.innerHTML = codeObjectsExample_9;

// Runs the function and adds the answer to the html page. -------
let objOneEx9 = {
  age : 50,
  gender : "male",
  pets : ["dogs", "cats", "birds"],

  get howOld(){
    return `${this.age} years old!`
  },

  set howOld(years){
    this.age = years;
  }
};

function objectFuncV9(var_1) {
  var_1.howOld = 51;
  return var_1.howOld;
};

let outcomeObjects_9 = objectFuncV9(objOneEx9);
outcomeObjectsDiv_9.innerHTML = `outcome: <code>${outcomeObjects_9}</code>`;
// /////////////////////////////////////////////////////////////////////////

// Objects: Constructors -----------------------------------------------
let codeObjectsDiv_10 = document.getElementById("objectsCode_10");
let outcomeObjectsDiv_10 = document.getElementById("objectsOutput_10");

// Adds the example code to the html page. ----------------------------
let codeObjectsExample_10 =
`<pre><code>
function Person(age, gender, nationality){
  this._age = age;
  this._gender = gender;
  this._nationality = nationality;
  this.howOld = function(){
    return \`\${this._age} years old!\`
  };
};

let varOne = new Person(25, "female", "Mexican");

function objectFunc(var_1) {
  return var_1.howOld;
};
let outcome = objectFunc(varOne);
</code></pre>`;

codeObjectsDiv_10.innerHTML = codeObjectsExample_10;

// Runs the function and adds the answer to the html page. -------
function Person(age, gender, nationality){
  this._age = age;
  this._gender = gender;
  this._nationality = nationality;
  this.howOld = function(){
    return `${this._age} years old!`
  };
};

let objOneEx10 = new Person(25, "female", "Mexican");

function objectFuncV10(var_1) {
  return var_1.howOld();
};

let outcomeObjects_10 = objectFuncV10(objOneEx10);
outcomeObjectsDiv_10.innerHTML = `outcome: <code>${outcomeObjects_10}</code>`;
// /////////////////////////////////////////////////////////////////////////

// Objects: Classes -----------------------------------------------
let codeObjectsDiv_11 = document.getElementById("objectsCode_11");
let outcomeObjectsDiv_11 = document.getElementById("objectsOutput_11");

// Adds the example code to the html page. ----------------------------
let codeObjectsExample_11 =
`<pre><code>
class AnotherPerson{
  constructor(age, gender, nationality){
    this._age = age;
    this._gender = gender;
    this._nationality = nationality;
  }

  get howOld(){
    return \`\${this._age} years old!\`
  }
};

let varOne = new AnotherPerson(25, "female", "Mexican");

function objectFunc(var_1) {
  return var_1.howOld;
};
let outcome = objectFunc(varOne);
</code></pre>`;

codeObjectsDiv_11.innerHTML = codeObjectsExample_11;

// Runs the function and adds the answer to the html page. -------
class AnotherPerson{
  constructor(age, gender, nationality){
    this._age = age;
    this._gender = gender;
    this._nationality = nationality;
  }

  get howOld(){
    return `${this._age} years old!`
  }
};

let objOneEx11 = new AnotherPerson(25, "female", "Mexican");

function objectFuncV11(var_1) {
  return var_1.howOld;
};

let outcomeObjects_11 = objectFuncV11(objOneEx11);
outcomeObjectsDiv_11.innerHTML = `outcome: <code>${outcomeObjects_11}</code>`;
// /////////////////////////////////////////////////////////////////////////
