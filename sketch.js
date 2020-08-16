
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
	ball1 = new Ball(400, 350, 10);
	ball2 = new Ball(350, 350, 10);
	ball3 = new Ball(300, 350, 10);
	ball4 = new Ball(450, 350, 10);
	ball5 = new Ball(500, 350, 10);

	log1 = new Log(400, 350, 300, 20);

	//chain1 = new Chain(ball1.body, log1.body);
	//chain2 = new Chain(ball2.body, log1.body);
	//chain3 = new Chain(ball3.body, log1.body);
	//chain4 = new Chain(ball4.body, log1.body);
	//chain5 = new Chain(ball5.body, log1.body);

	chain1 = new Chain(ball1.body, log1.body, Diameter*2, 0);
	chain2 = new Chain(ball2.body, log1.body, Diameter*2, 0);
	chain3 = new Chain(ball3.body, log1.body, Diameter*2, 0);
	chain4 = new Chain(ball4.body, log1.body, Diameter*2, 0);
	chain5 = new Chain(ball5.body, log1.body, Diameter*2, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
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
  
  drawSprites();
 
}



