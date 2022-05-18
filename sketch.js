var backgroundimg;
var snow;

function preload(){

backgroundimg = loadImage("snow1.jpg");
snowImg = loadImage("snow4.webp");
}



function setup() {
  createCanvas(1600,800);
  
}

function draw() {
  background(backgroundimg);  
  snowfall();
  drawSprites();
}

function snowfall() {

 if(frameCount % 20 === 0){

snow = createSprite(Math.round(random(20,1580)),0,5,5);
snow.addImage(snowImg);
snow.scale = 0.2
snow.velocityY =3



 }

}