"use strict";

const fullScreenButton = document.querySelector(".fullscreen");
console.log(fullScreenButton);

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
