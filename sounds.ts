type SoundSource = {
  [key: string]: any;
};

const sounds = {
  kick: require("./assets/sounds/kick.mp3"),
  snare: require("./assets/sounds/snare.mp3"),
  sine1: require("./assets/sounds/sine1.mp3"),
  sine2: require("./assets/sounds/sine2.mp3"),
  sineGo: require("./assets/sounds/sineGo.mp3")
};

export default sounds;
