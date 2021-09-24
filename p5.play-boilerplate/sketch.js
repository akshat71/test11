
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,a


function preload(){
bgfield=loadImage("Background field.jpeg")
ironImg=loadImage("iron pickaxe.png")
WoodImg=loadImage("Pickaxe wooden.png")
StoneImg=loadImage("stone pickaxe.jpeg")

} 

function setup() {
  createCanvas(2100,1000);
 engine = Engine.create()
 world=engine.world
a = createSprite(50,50,50,50)
 //box1 = new BoxClass(50,50,50,50)}
}

function draw() {
  background(bgfield);  

 //box1.display()
keyWord()
  drawSprites();
}

function keyWord(){
if(keyCode==="UP_ARROW"){
  a.y=a.y+1
}
}

