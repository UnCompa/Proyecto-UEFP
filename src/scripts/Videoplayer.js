import Plyr from "plyr";
const player = new Plyr("video", {
  controls: [
    "play",
    "progress",
    "current-time",
    "mute",
    "volume",
    "settings",
    "play-large",
    "airplay",
    "fullscreen",
  ],
  keyboard: { focused: true },
});
const playerVertical = new Plyr("#vertical", {
  controls: [
    "play",
    "progress",
    "current-time",
    "mute",
    "settings",
    "play-large",
    "fullscreen",
  ],
  keyboard: { focused: true },
  ratio: "9:16"
});
