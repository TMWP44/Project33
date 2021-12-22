const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var background;
var SnowBg,boyImg;
var boy;
var snows = []; 

function preload(){
   SnowBg = loadImage("SnowBg.jpg")
   boyImg = loadImage("boy.png")
}

function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  boy = createSprite(450, 400, 50, 50);
  boy.addImage(boyImg)
 

}

function draw() {
  background(SnowBg);
  

  if(frameCount % 4 === 0){
    snows.push(new Snow(random(width/2-700,width/2+700), 10,10));
  }

  for (var s = 0; s < snows.length; s++) {
    snows[s].display();
  }


  drawSprites();
}