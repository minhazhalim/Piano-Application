const key = document.querySelectorAll('.key');
function playSound(newURL){
     new Audio(newURL).play();
}
key.forEach((keys,index) => {
     const number = index < 9 ? '0' + (index + 1) : (index + 1);
     const newURL = 'musics/key' + number + '.mp3';
     keys.addEventListener('click',() => playSound(newURL));
});