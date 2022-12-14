const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheckbox = document.querySelector('.keys-checkbox input');
let allKeys = [];
let audio = new Audio('./tunes/a.wav');
const playTune = (key) => {
     audio.src = `./tunes/${key}.wav`;
     audio.play();
     const clickedKey = document.querySelector(`[data-key="${key}"]`);
     clickedKey.classList.add('active');
     setTimeout(() => {
          clickedKey.classList.remove('active');
     },150);
};
pianoKeys.forEach(key => {
     allKeys.push(key.dataset.key);
     key.addEventListener('click',() => playTune(key.dataset.key));
});
const handleVolume = (event) => {
     audio.volume = event.target.value;
};
const showHideKey = () => {
     pianoKeys.forEach(key => key.classList.toggle('hide'));
};
const pressedKey = (event) => {
     if(allKeys.includes(event.key)) playTune(event.key);
};
keysCheckbox.addEventListener('click',showHideKey);
volumeSlider.addEventListener('input',handleVolume);
document.addEventListener('keydown',pressedKey);