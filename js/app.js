console.log('I am running!');
document.write('hello 005');

document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = new Audio('https://somafm.com/m3u/live130.m3u');
  audioPlayer.controls = true;
  document.body.appendChild(audioPlayer);
  audioPlayer.play();
});