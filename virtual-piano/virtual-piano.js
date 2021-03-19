"use strict";
//fullscreen API  functionality
const fullScreenButton = document.querySelector(".fullscreen");

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
fullScreenButton.addEventListener("click", () => toggleFullScreen());

//piano functionality
// piano.addEventListener("click", (event) => {
//   if (event.target.classList.contains("piano-key")) {
//     pianoКeys.forEach((el) => {
//       if (el.classList.contains("active")) {
//         el.classList.remove("active");
//       }
//     });
//     event.target.classList.add("active");
//   }
// });

// show and hide letters and notes
const lettersButton = document.querySelector(".btn-letters");
console.log(lettersButton.tagName);
const notesButton = document.querySelector(".btn-notes");
const signСontrolButtons = document.querySelector(".btn-container");
signСontrolButtons.addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") return;
  toggleVisibility(e.target);
});
let activeElement;
function toggleVisibility(element) {
  element.classList.toggle("btn-active");
  if (activeElement) {
    activeElement.classList.remove("btn-active");
  }
  activeElement = element;
  activeElement.classList.add("btn-active"); //
}
