
let video = [];
let x = 100;
let y = 0;
let frame;




function preload(){
  video[0] = loadImage("assets/head/Layer1.png");
  video[1] = loadImage("assets/head/Layer2.png");
  video[2] = loadImage("assets/head/Layer3.png");
  video[3] = loadImage("assets/head/Layer4.png");
  video[4] = loadImage("assets/head/Layer5.png");
  video[5] = loadImage("assets/head/Layer6.png");
  video[6] = loadImage("assets/head/Layer7.png");
  video[7] = loadImage("assets/head/Layer8.png");
  video[8] = loadImage("assets/head/Layer9.png");
  video[9] = loadImage("assets/head/Layer10.png");
  video[10] = loadImage("assets/head/Layer11.png");
  video[11] = loadImage("assets/head/Layer12.png");
  video[12] = loadImage("assets/head/Layer13.png");
  video[13] = loadImage("assets/head/Layer14.png");
  video[14] = loadImage("assets/head/Layer15.png");
  video[15] = loadImage("assets/head/Layer16.png");
  video[16] = loadImage("assets/head/Layer17.png");
  video[17] = loadImage("assets/head/Layer18.png");
  video[18] = loadImage("assets/head/Layer19.png");
  video[19] = loadImage("assets/head/Layer20.png");
  video[20] = loadImage("assets/head/Layer21.png");
  video[21] = loadImage("assets/head/Layer22.png");
}

function setup() {
    let canvas = createCanvas((windowWidth), windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  //blendMode(OVERLAY)
  //BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN, ADD, REMOVE or SUBTRACT
  background(255);
}

function draw() {
  background(255);
 
  

  x = 450;
  y = -50;
  if (mouseX<windowWidth){
    let t = map(mouseX, 0, windowWidth, 0, video.length);
    
    frame = video[floor(t)]
  }
  else if (mouseX>windowWidth){
    frame = video[21]
  }
  else if (mouseX<0){
    frame = video[0]
  }
  push();
  //blendMode(OVERLAY);
  frame.resize(300, 400)
  image(frame, x, y)
  pop();

}

function windowResized(){
  resizeCanvas((windowWidth), windowHeight);
  text_x = 50;
  text_y = (height/2)-50;
}

