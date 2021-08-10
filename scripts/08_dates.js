"use strict";

// Dates: new Date() --------------------------------------------------------
let codeDatesDiv_1 = document.getElementById("datesCode_1");
let outcomeDatesDiv_1 = document.getElementById("datesOutput_1");
let dateButton_1 = document.getElementById("dateBut_1");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_1 =
`<pre><code>
function dateFunc() {
  let newDate = new Date();
  return newDate;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_1.innerHTML = codeDatesExample_1;

// Runs the function and adds the answer to the html page. -------
dateButton_1.addEventListener("click", dateFuncV1);

function dateFuncV1() {
    let outcomeDates_1 = new Date();
    outcomeDatesDiv_1.innerHTML = `outcome: <code>${outcomeDates_1}</code>`;
};
// ////////////////////////////////////////////////////////////////////////

// Dates: toLocaleTimeString() -------------------------------------------
let codeDatesDiv_2 = document.getElementById("datesCode_2");
let outcomeDatesDiv_2 = document.getElementById("datesOutput_2");
let dateButton_2 = document.getElementById("dateBut_2");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_2 =
`<pre><code>
function dateFunc() {
  let newDate = new Date().toLocaleTimeString();
  return newDate;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_2.innerHTML = codeDatesExample_2;

// Runs the function and adds the answer to the html page. -------
dateButton_2.addEventListener("click", dateFuncV2);

function dateFuncV2() {
    let outcomeDates_2 = new Date().toLocaleTimeString();
    outcomeDatesDiv_2.innerHTML = `outcome: <code>${outcomeDates_2}</code>`;
};
// ////////////////////////////////////////////////////////////////////////

// Dates: getFullYear() -------------------------------------------
let codeDatesDiv_3 = document.getElementById("datesCode_3");
let outcomeDatesDiv_3 = document.getElementById("datesOutput_3");
let dateButton_3 = document.getElementById("dateBut_3");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_3 =
`<pre><code>
function dateFunc() {
  let newDate = new Date().getFullYear();
  return newDate;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_3.innerHTML = codeDatesExample_3;

// Runs the function and adds the answer to the html page. -------
dateButton_3.addEventListener("click", dateFuncV3);

function dateFuncV3() {
    let outcomeDates_3 = new Date().getFullYear();
    outcomeDatesDiv_3.innerHTML = `outcome: <code>${outcomeDates_3}</code>`;
};
// ////////////////////////////////////////////////////////////////////////

// Dates: getMonth() -------------------------------------------
let codeDatesDiv_4 = document.getElementById("datesCode_4");
let outcomeDatesDiv_4 = document.getElementById("datesOutput_4");
let outcomeDatesDiv_4b = document.getElementById("datesOutput_4b");
let dateButton_4 = document.getElementById("dateBut_4");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_4 =
`<pre><code>
function dateFunc() {
  let newDate = new Date().getMonth();
  return newDate;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_4.innerHTML = codeDatesExample_4;

// Runs the function and adds the answer to the html page. -------
dateButton_4.addEventListener("click", dateFuncV4);

function dateFuncV4() {
    let outcomeDates_4 = new Date().getMonth();
    outcomeDatesDiv_4.innerHTML = `outcome: <code>${outcomeDates_4}</code>`;
};
outcomeDatesDiv_4b.innerHTML = `Months are zero indexed!`;
// ////////////////////////////////////////////////////////////////////////

// Dates: getDate() -------------------------------------------
let codeDatesDiv_5 = document.getElementById("datesCode_5");
let outcomeDatesDiv_5 = document.getElementById("datesOutput_5");
let dateButton_5 = document.getElementById("dateBut_5");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_5 =
`<pre><code>
function dateFunc() {
  let newDate = new Date().getDate();
  return newDate;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_5.innerHTML = codeDatesExample_5;

// Runs the function and adds the answer to the html page. -------
dateButton_5.addEventListener("click", dateFuncV5);

function dateFuncV5() {
    let outcomeDates_5 = new Date().getDate();
    outcomeDatesDiv_5.innerHTML = `outcome: <code>${outcomeDates_5}</code>`;
};
// ////////////////////////////////////////////////////////////////////////

// Dates: getDay() -------------------------------------------
let codeDatesDiv_6 = document.getElementById("datesCode_6");
let outcomeDatesDiv_6 = document.getElementById("datesOutput_6");
let outcomeDatesDiv_6b = document.getElementById("datesOutput_6b");
let dateButton_6 = document.getElementById("dateBut_6");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_6 =
`<pre><code>
function dateFunc() {
  let newDate = new Date().getDay();
  return newDate;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_6.innerHTML = codeDatesExample_6;

// Runs the function and adds the answer to the html page. -------
dateButton_6.addEventListener("click", dateFuncV6);

function dateFuncV6() {
    let outcomeDates_6 = new Date().getDay();
    outcomeDatesDiv_6.innerHTML = `outcome: <code>${outcomeDates_6}</code>`;
};
outcomeDatesDiv_6b.innerHTML = `Sunday (0) to Saturday (6)!`;
// ////////////////////////////////////////////////////////////////////////

// Dates: getTime() -------------------------------------------
let codeDatesDiv_7 = document.getElementById("datesCode_7");
let outcomeDatesDiv_7 = document.getElementById("datesOutput_7");
let outcomeDatesDiv_7b = document.getElementById("datesOutput_7b");
let dateButton_7 = document.getElementById("dateBut_7");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_7 =
`<pre><code>
function dateFunc() {
  let newDate = new Date().getTime();
  return newDate;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_7.innerHTML = codeDatesExample_7;

// Runs the function and adds the answer to the html page. -------
dateButton_7.addEventListener("click", dateFuncV7);

function dateFuncV7() {
    let outcomeDates_7 = new Date().getTime();
    outcomeDatesDiv_7.innerHTML = `outcome: <code>${outcomeDates_7}</code>`;
};
outcomeDatesDiv_7b.innerHTML = `Milliseconds from the 1st of January, 1970`;
// ////////////////////////////////////////////////////////////////////////

// Dates: Date.now() -------------------------------------------
let codeDatesDiv_8 = document.getElementById("datesCode_8");
let outcomeDatesDiv_8 = document.getElementById("datesOutput_8");
let outcomeDatesDiv_8b = document.getElementById("datesOutput_8b");
let dateButton_8 = document.getElementById("dateBut_8");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_8 =
`<pre><code>
function dateFunc() {
  let newDate = Date.now();
  return newDate;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_8.innerHTML = codeDatesExample_8;

// Runs the function and adds the answer to the html page. -------
dateButton_8.addEventListener("click", dateFuncV8);

function dateFuncV8() {
    let outcomeDates_8 = Date.now();
    outcomeDatesDiv_8.innerHTML = `outcome: <code>${outcomeDates_8}</code>`;
};
outcomeDatesDiv_8b.innerHTML = `Milliseconds from the 1st of January, 1970`;
// ////////////////////////////////////////////////////////////////////////

// Dates: getHours() -------------------------------------------
let codeDatesDiv_9 = document.getElementById("datesCode_9");
let outcomeDatesDiv_9 = document.getElementById("datesOutput_9");
let dateButton_9 = document.getElementById("dateBut_9");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_9 =
`<pre><code>
function dateFunc() {
  let newDate = new Date().getHours();
  return newDate;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_9.innerHTML = codeDatesExample_9;

// Runs the function and adds the answer to the html page. -------
dateButton_9.addEventListener("click", dateFuncV9);

function dateFuncV9() {
    let outcomeDates_9 = new Date().getHours();
    outcomeDatesDiv_9.innerHTML = `outcome: <code>${outcomeDates_9}</code>`;
};
// ////////////////////////////////////////////////////////////////////////

// Dates: getMinutes() -------------------------------------------
let codeDatesDiv_10 = document.getElementById("datesCode_10");
let outcomeDatesDiv_10 = document.getElementById("datesOutput_10");
let dateButton_10 = document.getElementById("dateBut_10");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_10 =
`<pre><code>
function dateFunc() {
  let newDate = new Date().getMinutes();
  return newDate;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_10.innerHTML = codeDatesExample_10;

// Runs the function and adds the answer to the html page. -------
dateButton_10.addEventListener("click", dateFuncV10);

function dateFuncV10() {
    let outcomeDates_10 = new Date().getMinutes();
    outcomeDatesDiv_10.innerHTML = `outcome: <code>${outcomeDates_10}</code>`;
};
// ////////////////////////////////////////////////////////////////////////

// Dates: getSeconds() -------------------------------------------
let codeDatesDiv_11 = document.getElementById("datesCode_11");
let outcomeDatesDiv_11 = document.getElementById("datesOutput_11");
let dateButton_11 = document.getElementById("dateBut_11");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_11 =
`<pre><code>
function dateFunc() {
  let newDate = new Date().getSeconds();
  return newDate;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_11.innerHTML = codeDatesExample_11;

// Runs the function and adds the answer to the html page. -------
dateButton_11.addEventListener("click", dateFuncV11);

function dateFuncV11() {
    let outcomeDates_11 = new Date().getSeconds();
    outcomeDatesDiv_11.innerHTML = `outcome: <code>${outcomeDates_11}</code>`;
};
// ////////////////////////////////////////////////////////////////////////

// Dates: getMilliseconds() -------------------------------------------
let codeDatesDiv_12 = document.getElementById("datesCode_12");
let outcomeDatesDiv_12 = document.getElementById("datesOutput_12");
let dateButton_12 = document.getElementById("dateBut_12");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_12 =
`<pre><code>
function dateFunc() {
  let newDate = new Date().getMilliseconds();
  return newDate;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_12.innerHTML = codeDatesExample_12;

// Runs the function and adds the answer to the html page. -------
dateButton_12.addEventListener("click", dateFuncV12);

function dateFuncV12() {
    let outcomeDates_12 = new Date().getMilliseconds();
    outcomeDatesDiv_12.innerHTML = `outcome: <code>${outcomeDates_12}</code>`;
};
// ////////////////////////////////////////////////////////////////////////

// Dates: setFullYear() V1 --------------------------------------------
let codeDatesDiv_13 = document.getElementById("datesCode_13");
let outcomeDatesDiv_13 = document.getElementById("datesOutput_13");
let dateButton_13 = document.getElementById("dateBut_13");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_13 =
`<pre><code>
function dateFunc() {
  let date = new Date();
  let year = date.setFullYear(2017);
  return year;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_13.innerHTML = codeDatesExample_13;

// Runs the function and adds the answer to the html page. -------
dateButton_13.addEventListener("click", dateFuncV13);

function dateFuncV13() {
    let date = new Date();
    let year = date.setFullYear(2017);
    let outcomeDates_13 = year;
    outcomeDatesDiv_13.innerHTML = `outcome: <code>${outcomeDates_13}</code>`;
};
// ////////////////////////////////////////////////////////////////////////

// Dates: setFullYear() V2  --------------------------------------------
let codeDatesDiv_14 = document.getElementById("datesCode_14");
let outcomeDatesDiv_14 = document.getElementById("datesOutput_14");
let dateButton_14 = document.getElementById("dateBut_14");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_14 =
`<pre><code>
function dateFunc() {
  let date = new Date();
  let year = date.setFullYear(2017);
  let newYear = new Date(year).getFullYear();
  return newYear;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_14.innerHTML = codeDatesExample_14;

// Runs the function and adds the answer to the html page. -------
dateButton_14.addEventListener("click", dateFuncV14);

function dateFuncV14() {
    let date = new Date();
    let year = date.setFullYear(2017);
    let newYear = new Date(year).getFullYear();
    let outcomeDates_14 = newYear;
    outcomeDatesDiv_14.innerHTML = `outcome: <code>${outcomeDates_14}</code>`;
};
// ////////////////////////////////////////////////////////////////////////

// Dates: setFullYear() V3  --------------------------------------------
let codeDatesDiv_15 = document.getElementById("datesCode_15");
let outcomeDatesDiv_15 = document.getElementById("datesOutput_15");
let dateButton_15 = document.getElementById("dateBut_15");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_15 =
`<pre><code>
function dateFunc() {
  let date = new Date();
  let year = date.setFullYear(2017, 11, 5);
  let newYear = new Date(year).getFullYear();
  return newYear;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_15.innerHTML = codeDatesExample_15;

// Runs the function and adds the answer to the html page. -------
dateButton_15.addEventListener("click", dateFuncV15);

function dateFuncV15() {
    let date = new Date();
    let year = date.setFullYear(2017, 11, 5);
    let newYear = new Date(year).getFullYear();
    let outcomeDates_15 = newYear;
    outcomeDatesDiv_15.innerHTML = `outcome: <code>${outcomeDates_15}</code>`;
};
// ////////////////////////////////////////////////////////////////////////

// Dates: setMonth() V1  --------------------------------------------
let codeDatesDiv_16 = document.getElementById("datesCode_16");
let outcomeDatesDiv_16 = document.getElementById("datesOutput_16");
let dateButton_16 = document.getElementById("dateBut_16");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_16 =
`<pre><code>
function dateFunc() {
  let date = new Date();
  let month = date.setMonth(5);
  return month;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_16.innerHTML = codeDatesExample_16;

// Runs the function and adds the answer to the html page. -------
dateButton_16.addEventListener("click", dateFuncV16);

function dateFuncV16() {
    let date = new Date();
    let month = date.setMonth(5);
    let outcomeDates_16 = month;
    outcomeDatesDiv_16.innerHTML = `outcome: <code>${outcomeDates_16}</code>`;
};
// ////////////////////////////////////////////////////////////////////////

// Dates: setMonth() V2  --------------------------------------------
let codeDatesDiv_17 = document.getElementById("datesCode_17");
let outcomeDatesDiv_17 = document.getElementById("datesOutput_17");
let dateButton_17 = document.getElementById("dateBut_17");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_17 =
`<pre><code>
function dateFunc() {
  let date = new Date();
  let month = date.setMonth(5);
  let newMonth = new Date(month).getMonth();
  return newMonth;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_17.innerHTML = codeDatesExample_17;

// Runs the function and adds the answer to the html page. -------
dateButton_17.addEventListener("click", dateFuncV17);

function dateFuncV17() {
    let date = new Date();
    let month = date.setMonth(5);
    let newMonth = new Date(month).getMonth();
    let outcomeDates_17 = newMonth;
    outcomeDatesDiv_17.innerHTML = `outcome: <code>${outcomeDates_17}</code>`;
};
// ////////////////////////////////////////////////////////////////////////

// Dates: setTime() V1 ------------------------------------------------
let codeDatesDiv_18 = document.getElementById("datesCode_18");
let outcomeDatesDiv_18 = document.getElementById("datesOutput_18");
let dateButton_18 = document.getElementById("dateBut_18");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_18 =
`<pre><code>
function dateFunc() {
  let date = new Date();
  let milliSecDay = 24 * 60 * 60 * 1000;
  let newTime = date.setTime(milliSecDay);
  return newTime;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_18.innerHTML = codeDatesExample_18;

// Runs the function and adds the answer to the html page. -------
dateButton_18.addEventListener("click", dateFuncV18);

function dateFuncV18() {
    let date = new Date();
    let milliSecDay = 24 * 60 * 60 * 1000;
    let outcomeDates_18 = date.setTime(milliSecDay);
    outcomeDatesDiv_18.innerHTML = `outcome: <code>${outcomeDates_18}</code>`;
};
// ////////////////////////////////////////////////////////////////////////

// Dates: setTime() V2 ------------------------------------------------
let codeDatesDiv_19 = document.getElementById("datesCode_19");
let outcomeDatesDiv_19 = document.getElementById("datesOutput_19");
let dateButton_19 = document.getElementById("dateBut_19");

// Adds the example code to the html page. ----------------------------
let codeDatesExample_19 =
`<pre><code>
function dateFunc() {
  let date = new Date();
  let milliSecDay = 24 * 60 * 60 * 1000;
  let newTime = date.setTime(milliSecDay);
  let updatedTime = new Date(newTime);
  return updatedTime;
};
let outcome = dateFunc();
</code></pre>`;

codeDatesDiv_19.innerHTML = codeDatesExample_19;

// Runs the function and adds the answer to the html page. -------
dateButton_19.addEventListener("click", dateFuncV19);

function dateFuncV19() {
    let date = new Date();
    let milliSecDay = 24 * 60 * 60 * 1000;
    let newTime = date.setTime(milliSecDay);
    let updatedTime = new Date(newTime);
    let outcomeDates_19 = updatedTime;
    outcomeDatesDiv_19.innerHTML = `outcome: <code>${outcomeDates_19}</code>`;
};
// ////////////////////////////////////////////////////////////////////////
