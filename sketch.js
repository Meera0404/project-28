
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, stone,Ground, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var boy,boyImg;
var rope

function preload()
{
	boyImg = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



	stone  = new Stone(10,40,15);
	rope = new Rope(stone.body,{x:150,y:470});


	tree   = new Tree(1100,550,30,300);
	Ground = new ground(600,600,2000,20);
	mango1 = new mango(1250,200,25);
	mango2 = new mango(1200,100,25);
	mango3 = new mango(1100,50,25);
	mango4 = new mango(1000,200,25);
	mango5 = new mango(1100,150,25);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  Engine.update(engine);

  background("lightgrey");

  image(boyImg,108,400,200,250);

  stone.display();
  rope.display();

  tree.display();
  Ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    rope.fly();
}

