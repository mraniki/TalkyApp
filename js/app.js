console.log('I am running!');
document.write('hello 004');

document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.querySelector('audio');
  audioPlayer.src = 'https://somafm.com/m3u/live130.m3u';
});