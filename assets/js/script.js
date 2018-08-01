let stage = document.createElement('canvas');
stage.width = 300;
stage.height = 300;
stage.style.background = 'black'
document.body.appendChild(stage);

let cnv = stage.getContext('2d');
let w = stage.width;
let h = stage.height;
let r = 30;
let angle = 1;
let limitOpen = 40;
let colorPacMan = 'yellow';
let opening = true;
let interval = 20;

function draw() {
  cnv.fillStyle = 'black';
  cnv.strokeStyle = 'black';
  cnv.lineWidth = 21;
  cnv.arc(w / 2, h / 2, r, 0, Math.PI * 2);
  cnv.stroke();
  cnv.fill();
  ang = (Math.PI/180)*angle;

  cnv.beginPath();
  cnv.fillStyle = colorPacMan;
  cnv.strokeStyle = colorPacMan;
  cnv.lineWidth = 40;
  cnv. arc(w/2, h/2, r-10, ang, -ang);
  cnv.stroke();
}

function animate() {
  setInterval(function(){
    draw();
    if(opening) {
      ++angle;
    } else {
      --angle
    }
    if(angle <= 1 || angle >= limitOpen ) {
      opening = angle <= 1 ? true : false;
    }
  }, interval);
}

animate();

