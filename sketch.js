
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	function keyPressed(){
		if(keyCode === UP_ARROW){
			Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
			
		}
	}
	
	//Create the Bodies Here.
	dustbin= new Dustbin(400,400,10,50)
	dustbin2= new Dustbin(500,500,10,50)
	dustbin3= new Dustbin(450,450,90,10)
	ground= new Ground(200,700,1200,30)
	paper = new Paper(200,200,30)
	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 dustbin.display();
 dustbin2.display();
 dustbin3.display();
 ground.display();
 paper.display();
}






