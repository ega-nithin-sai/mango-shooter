const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var treeObj;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
var mango8;
var mango9;
var mango10;
var boy;
var stone;
var slingshot;

var temp = 0;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,30);
	mango3=new mango(1150,150,30);
	mango4=new mango(1200,200,30);
	mango5=new mango(1050,150,30);
	mango6=new mango(1100,200,30);
	mango7=new mango(950,150,30);
	mango8=new mango(1000,200,30);
	mango9=new mango(930,240,30);
	mango10=new mango(1000,200,30);

	treeObj=new tree(1050,580);

	groundObject=new ground(width/2,600,width,20);

	stone = new Stone(240,415);

	slingshot = new Slingshot(stone.body,{x:240,y:415});
	
	Engine.run(engine);
}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  groundObject.display();

  slingshot.display();

  stone.display();

  checkCollision(stone.body,mango1.body);
  checkCollision(stone.body,mango2.body);
  checkCollision(stone.body,mango3.body);
  checkCollision(stone.body,mango4.body);
  checkCollision(stone.body,mango5.body);
  checkCollision(stone.body,mango6.body);
  checkCollision(stone.body,mango7.body);
  checkCollision(stone.body,mango8.body);
  checkCollision(stone.body,mango9.body);
  checkCollision(stone.body,mango10.body);

  if(keyDown("space")){
	Body.setPosition(stone.body,{x:240,y:415});
	slingshot.attach(stone.body);
  }
}

function mouseDragged(){
    Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function checkCollision(stone,mango){
	var distance = dist(mango.position.x,mango.position.y,stone.position.x,stone.position.y);

	if(distance <= mango.circleRadius + stone.circleRadius){
		Matter.Body.setStatic(mango,false);
	}
}
