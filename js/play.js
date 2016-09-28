function playPause(soundId) {
  soundId.volume=.8;

  if (soundId.paused){
    soundId.play();       
  }

  else {
    soundId.pause();
  }
}