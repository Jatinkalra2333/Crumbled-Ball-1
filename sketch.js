
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var ground,platform;
var world
var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
    world = engine.world;


	ground = new Ground(600,height,1200,20);
	paperDiameter=40;
	startPaperPositionX = 100
	startPaperPositionY = height/4 + 500
	paperObject = new paper(startPaperPositionX-paperDiameter*2,startPaperPositionY,paperDiameter*2);
  
	var render = Render.create({
		element : document.body,
		engine : engine,
		options: {
			width : 1200,
			height : 700,
			wireframes : false

		}


	});

dustbin = new Dustbin(500,600)
	
	


}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("white")
  Engine.update(engine);

  ground.display();
  paperObject.display();
  dustbin.display();





  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}



