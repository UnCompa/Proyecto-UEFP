import Plyr from "plyr";
const player = Plyr.setup("video", {
  controls: [
    "play",
    "progress",
    "current-time",
    "mute",
    "volume",
    "settings",
    "airplay",
    "fullscreen",
    "download",
  ],
  keyboard: { focused: true },
  invertTime: false  
});
const playerVertical = Plyr.setup("#vertical", {
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
