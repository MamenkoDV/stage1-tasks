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
//play music by mousedown mouseup
piano.addEventListener("mousedown", (e) => {
  let item = e.target;
  item.classList.add("piano-key-active");
  item.classList.add("piano-key-active-pseudo");
  let src = `/assets/audio/${item.dataset.note}.mp3`;
  playAudio(src);
});
piano.addEventListener("mouseup", (e) => {
  let item = e.target;
  item.classList.remove("piano-key-active");
  item.classList.remove("piano-key-active-pseudo");
});
//play music by keyboard
const keysLetter = pianoKeys
  .map((key) => "Key" + key.dataset.letter)
  .filter(Boolean);

window.addEventListener("keydown", (e) => {
  let keyLetter = e.code;
  if (!keysLetter.includes(keyLetter)) {
    return;
  }
  if (e.repeat === true) {
    return;
  }
  const keyNote = document.querySelector(
    `.piano-key[data-letter=${keyLetter[3]}]`
  );
  keyNote.classList.add("piano-key-active");
  const src = `/assets/audio/${keyNote.dataset.note}.mp3`;
  playAudio(src);
});
window.addEventListener("keyup", (e) => {
  if (e.code === null) return;
  let keyLetter = e.code[3];
  const keyNote = document.querySelector(
    `.piano-key[data-letter=${keyLetter}]`
  );
  keyNote.classList.remove("piano-key-active");
});
const activateKey = (event) => {
  event.target.classList.add("piano-key-active");
  event.target.classList.add("piano-key-active-pseudo");
  let src = `/assets/audio/${event.target.dataset.note}.mp3`;
  playAudio(src);
};

const deactivateKey = (event) => {
  event.target.classList.remove("piano-key-active-pseudo");
  event.target.classList.remove("piano-key-active");
};

const startCorrespondOver = (event) => {
  if (event.target.classList.contains("piano-key")) {
    event.target.classList.add("piano-key-active");
    event.target.classList.add("piano-key-active-pseudo");
  }

  pianoKeys.forEach((elem) => {
    elem.addEventListener("mouseover", activateKey);
    elem.addEventListener("mouseout", deactivateKey);
  });
};

const stopCorrespondOver = () => {
  pianoKeys.forEach((elem) => {
    elem.classList.remove("piano-key-active");
    elem.classList.remove("piano-key-active-pseudo");
    elem.removeEventListener("mouseover", activateKey);
    elem.removeEventListener("mouseout", deactivateKey);
  });
};

piano.addEventListener("mousedown", startCorrespondOver, false);
piano.addEventListener("mouseup", stopCorrespondOver);
