"use strict";

 // Global variables. -------------------------------------------
 let navigationButton = document.querySelector(".navButton");

 // Display / hide the navigation. ------------------------------
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
