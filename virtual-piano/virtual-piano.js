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
const notesButton = document.querySelector(".btn-notes");
const signСontrolButtons = document.querySelector(".btn-container");
const pianoKeys = Array.from(document.querySelectorAll(".piano-key"));
const piano = document.querySelector(".piano");

signСontrolButtons.addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") return;
  toggleVisibility(e.target, "btn-active");
  e.target === lettersButton
    ? pianoKeys.forEach((element) => element.classList.add("piano-key-letter"))
    : pianoKeys.forEach((element) =>
        element.classList.remove("piano-key-letter")
      );
});
//   pianoKeys.forEach((element) =>
//     console.log(element.getAttribute("data-letter"))
//   );
//   pianoKeys.forEach((element) =>
//     console.log(element.getAttribute("data-notes"))
//   );
let activeElement = notesButton;
function toggleVisibility(element, classForToggle) {
  if (activeElement) {
    activeElement.classList.remove(classForToggle);
  }
  activeElement = element;
  activeElement.classList.add(classForToggle);
}
function signKeys(element, classForToggle) {}
