const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var mango,mango1,mango2,mango3,stone,tree,boy,ground;
var launcher1;
var launchingForce = 100;

function preload()
{
  boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 700);

  engine = Engine.create();
  world = engine.world;
  
  
   
  // Ground
  ground = new Ground(width/2,650,width,20);
  
  
  //Mango
	mango4 = new Mango(920,300,50,50);
	mango1 = new Mango(1000,100,70,60);
	mango2 = new Mango(850,230,50,40);
  mango3 = new Mango(1100,300,60,50);
    // Tree
 tree = new Tree(1000,660);
  
  // Stone
  stone = new Stone(235,420,30);
  
  //Launcher
  launcher1 = new Boy(stone.body,{x:235,y:420})
		
	Engine.run(engine);
  
}


function draw() {
  background(210);

  text("Press SPACE to get second chance to play",100,100);
  //boy image was missing
  image(boy ,200,340,200,300);
  
  // Ground
  ground.display();
  
  // tree
  tree.display();

  // Mango
  mango4.display();
  mango1.display();
  mango2.display();
  mango3.display();

  // Boy
  launcher1.display();

  //Stone
  stone.display();
  detectcollision(stone,mango4);
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);

  
  
 
}

function mouseDragged()
{
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){

  launcher1.fly();
}

function keyPressed()
{
  if (keyCode === 32)
  {
    Matter.Body.setPosition(stone.body,{x:235,y:420})
    launcher1.attach(stone.body);
  }
}

function detectcollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }


