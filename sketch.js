
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bin1,bin2,bin3
var ground;
var paper;
var launcher;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	bin1 = new Dustbin(650,650,150,150);
	bin2 = new Dustbin(580,650,20,300);
	bin3 = new Dustbin(720,650,20,300);

	ground = new Ground(400,670,800,20);

	paper = new Paper(100,600,40,40);

    launcher = new Launcher(paper.body,{x:200,y:350});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
paper.display();
ground.display();
bin1.display();
launcher.display();

  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
	
	}
	function mouseReleased(){
	   launcher.fly();
	
	}



