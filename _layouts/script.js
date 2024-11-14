const video = document.getElementById("videoPlayer");
const englishAudio = document.getElementById("englishAudio");
const spanishAudio = document.getElementById("spanishAudio");
const englishButton = document.getElementById("englishButton");
const spanishButton = document.getElementById("spanishButton");

let currentAudio = englishAudio; // Default to English audio

function syncAudio() {
  currentAudio.currentTime = video.currentTime;
}

video.addEventListener("play", () => currentAudio.play());
// englishAudio.addEventListener("play", () => {
//   video.play();
//   currentAudio.play();
// });
// spanishAudio.addEventListener("play", () => {
//   video.play();
//   currentAudio.play();
// });
video.addEventListener("pause", () => currentAudio.pause());
video.addEventListener("timeupdate", syncAudio);

function switchLanguage(language) {
  // Pause the current audio
  currentAudio.pause();

  // Set the current audio based on the selected language
  if (language === "english") {
    currentAudio = englishAudio;
    englishButton.classList.add("active-button");
    spanishButton.classList.remove("active-button");
  } else if (language === "hindi") {
    currentAudio = spanishAudio;
    spanishButton.classList.add("active-button");
    englishButton.classList.remove("active-button");
  }

  // Sync audio with video and play if video is playing
  currentAudio.currentTime = video.currentTime;
  // Check if video is paused
  if (video.paused) {
    video.play(); // Start playing the video
    currentAudio.play(); // Start playing the selected audio
  } else {
    currentAudio.play(); // Continue playing the selected audio if video is already playing
  }
}
