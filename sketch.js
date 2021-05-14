var bg;
var cat,cat1Img,cat2Img,cat3Img;
var mouse,mouse1Img,mouse2Img,mouse3Img;
function preload() {
    bg = loadImage("images/garden.png")
    cat1Img = loadAnimation("images/cat1.png");
    cat2Img = loadAnimation("images/cat2.png","images/cat3.png");
    cat3Img = loadAnimation("images/cat4.png");
    mouse1Img = loadAnimation("images/mouse1.png");
    mouse2Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3Img = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);  
   cat = createSprite(800,650);
   cat.addAnimation("sleeping",cat1Img);
   cat.scale = 0.2;
   mouse = createSprite(200,650);
   mouse.addAnimation("standing",mouse1Img);
   mouse.scale = 0.2;

}

function draw() {

    background(bg);
   if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       cat.addAnimation("catLast",cat3Img)
       cat.changeAnimation("catLast");
       cat.veloctyX = 0;
       cat.x = 300;
       mouse.addAnimation("mouseLast",mouse3Img);
       mouse.changeAnimation("mouseLast");
   }

    drawSprites();
}


function keyPressed(){

  if(keyCode === RIGHT_ARROW){
      mouse.addAnimation("mouseTeasing",mouse2Img);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }
if(keyCode === LEFT_ARROW){
    cat.veloctiyX = -5;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
}

}
