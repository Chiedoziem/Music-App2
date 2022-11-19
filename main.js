function preload(){
  Song1 = document.getElementById('Song1')
  Song2 = document.getElementById('Song2')
  Song3 = document.getElementById('Song3')
  Song4 = document.getElementById('Song4')
  Song5 = document.getElementById('Song5')
  Song6 = document.getElementById('Song6')
  Song7 = document.getElementById('Song7')
  Song8 = document.getElementById('Song8')
  Song9 = document.getElementById('Song9')
  Song10 = document.getElementById('Song10')
}
function setup(){
    canvas = createCanvas(640, 520);
    canvas.position(0, 490);
    video = createCapture(VIDEO);
    video.size(640, 420);
video.hide();
}
 function draw(){
    image(video, 0, 0, 640, 520)
}
