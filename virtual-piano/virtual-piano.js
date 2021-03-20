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

let activeElement = notesButton; //default state of app button  notes active
function toggleVisibility(element, classForToggle) {
  if (activeElement) {
    activeElement.classList.remove(classForToggle);
  }
  activeElement = element;
  activeElement.classList.add(classForToggle);
}

// create audioplayer
function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}

//piano functionality
piano.addEventListener("click", (event) => {
  let item = event.target;
  if (!item) {
    return;
  }
  if (item.classList.contains("piano-key")) {
    pianoKeys.forEach((el) => {
      if (el.classList.contains("piano-key-active")) {
        el.classList.remove("piano-key-active");
      }
    });
    item.classList.add("piano-key-active");
  }
});

piano.addEventListener("click", (e) => {
  let src = `/assets/audio/${e.target.dataset.note}.mp3`;
  playAudio(src);
});
const keysLetter = pianoKeys.map((key) => key.dataset.letter).filter(Boolean);
window.addEventListener("keydown", (e) => {
  let keyLetter = e.code[3];
  if (e.code.length > 4 || !keysLetter.includes(keyLetter)) {
    return;
  }
  const keyNote = document.querySelector(
    `.piano-key[data-letter=${keyLetter}]`
  );
  const src = `/assets/audio/${keyNote.dataset.note}.mp3`;
  playAudio(src);
});
