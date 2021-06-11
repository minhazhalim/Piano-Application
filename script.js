const white_keys = ['z','x','c','v','b','n','m'];
const black_keys = ['s','d','g','h','j'];
const key = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');
key.forEach(keys => {
     keys.addEventListener('click',() => playNote(keys));
});
document.addEventListener('keydown',event => {
     if(event.repeat) return;
     const key = event.key;
     const whiteKeyIndex = white_keys.indexOf(key);
     const blackKeyIndex = black_keys.indexOf(key);
     if(whiteKeyIndex > -1){
          playNote(whiteKeys[whiteKeyIndex]);
     }
     if(blackKeyIndex > -1){
          playNote(blackKeys[blackKeyIndex]);
     }
});
function playNote(key){
     const noteAudio = document.getElementById(key.dataset.note);
     noteAudio.currentTime = 0;
     noteAudio.play();
     key.classList.add('active');
     noteAudio.addEventListener('ended',() => {
          key.classList.remove('active');
     });
}