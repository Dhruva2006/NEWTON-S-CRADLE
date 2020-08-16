
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 
var Diameter = 20;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	log1 = new Log(400, 200, 300, 50);

	ball1 = new Ball(100, 400, 30);
	ball2 = new Ball(160, 350, 30);
	ball3 = new Ball(220, 300, 30);
	ball4 = new Ball(280, 250, 30);
	ball5 = new Ball(340, 200, 30);

	//ball1 = new Ball(210, 250, 30);
	//ball2 = new Ball(370, 300, 30);
	//ball3 = new Ball(330, 300, 30);
	//ball4 = new Ball(390, 300, 30);
	//ball5 = new Ball(450, 300, 30);

	

	//chain1 = new Chain(ball1.body, log1.body);
	//chain2 = new Chain(ball2.body, log1.body);
	//chain3 = new Chain(ball3.body, log1.body);
	//chain4 = new Chain(ball4.body, log1.body);
	//chain5 = new Chain(ball5.body, log1.body);

	chain1 = new Chain(ball1.body, log1.body, Diameter*2, 0);
	chain2 = new Chain(ball2.body, log1.body, Diameter*1, 0);
	chain3 = new Chain(ball3.body, log1.body, 0, 0);
	chain4 = new Chain(ball4.body, log1.body, -Diameter*1, 0);
	chain5 = new Chain(ball5.body, log1.body, -Diameter*2, 0);

	//chain1 = new Chain(ball1.body, log1.body, Diameter*2, 0);
	//chain2 = new Chain(ball2.body, log1.body, Diameter*2, 0);
	//chain1 = new Chain(ball1.body, log1.body, Diameter*2, 0);
	//chain1 = new Chain(ball1.body, log1.body, Diameter*2, 0);
	//chain1 = new Chain(ball1.body, log1.body, Diameter*2, 0);


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(225);

  log1.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

 
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  //if(keyDown(UPARRROW)) {
	//ball1.y = 300;
  //}
  
  drawSprites();
 
}



