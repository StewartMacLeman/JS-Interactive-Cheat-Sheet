"use strict";

// Displays / hides the navigation. ------------------------------
 let navigationButton = document.querySelector(".navButton");
 navigationButton.addEventListener("click", displayNavigation)

 function displayNavigation(e){
   let nextElement = e.target.nextElementSibling;
   nextElement.classList.toggle("hide");

   let button = e.target;
   let buttonText = e.target.textContent;
   let hide = "Hide Nav";
   let show = "Show Nav";

   if ( buttonText == "Show Nav" ){
     button.textContent = hide;
   } else if ( buttonText == "Hide Nav" ){
     button.textContent = show;
   }
 }
 // Displays / hides the code outcomes. -----------------------
 let outcomeButtons = document.querySelectorAll(".outcomeBut");

 for (let i = 0; i < outcomeButtons.length; i++){
   outcomeButtons[i].addEventListener("click", showOutcome);
 }

 function showOutcome(e){
   let nextElement = e.target.nextElementSibling;
   nextElement.classList.toggle("hide");

   let button = e.target;
   let buttonText = e.target.textContent;
   let hide = "Hide Output";
   let show = "Show Output";

   if ( buttonText == "Show Output" ){
     button.textContent = hide;
   } else if ( buttonText == "Hide Output" ){
     button.textContent = show;
   }
 }
