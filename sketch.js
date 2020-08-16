var slingsht,bird,pig;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
	world = engine.world;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}