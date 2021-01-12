
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,treeI,boy,boyI;

function preload()
{
  boyI = loadImage("Images/boy.png")
  treeI = loadImage("Images/tree.png")
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  boy = createSprite(300,540,20,20)
  boy.addImage(boyI);
  boy.scale=0.2;

  tree = createSprite(1000,390,75,75);
  tree.addImage(treeI);
  tree.scale=0.5;

	ground = new Ground(800,690,1600,15)
  
  //tree = new Tree(1000,390,600,600);
  
  stone = new Stone(125,475,70,70);

  mango1 = new Mango(1000,200,100,100);
  mango2 = new Mango(1100,225,100,100);
  mango3 = new Mango(900,225,100,100);
  mango4 = new Mango(1200,250,100,100);
  mango5 = new Mango(950,300,100,100);

  cat = new Cat(stone.body,{x:200,y:425})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230, 230, 230);

  drawSprites();
 
  ground.display();

  //tree.display();
  
  stone.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  cat.display();

  collision(stone,mango1)
  collision(stone,mango2)
  collision(stone,mango3)
  collision(stone,mango4)
  collision(stone,mango5)
}

function mouseDragged(){
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  cat.fly();
}

function keyPressed(){
  if(keyCode === 32){
     Matter.Body.setPosition(stone.body, {x:200, y:425});
     cat.attach(stone.body);
  }
}

function collision(Lstone,Lmango){
  mangoPos = Lmango.body.position;
  stonePos = Lstone.body.position;

  var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
  if(distance <= Lmango.width+Lstone.width){
    Matter.Body.setStatic(Lmango.body,false);
  }
}