const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1
var Background
var arquero, arco
var base
var bloque
var sl
var flecha1
var ovni1
var ovny22;
var bl1;
var bg1;

function preload(){
Background=loadImage("wallpaperbetter.png")
arquero=loadImage("Hawkeye.png")
base=loadImage("base11.png")
arco=loadImage("pngegg.png")

}
function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

ground1=new Ground()
bloque=new Block(110, 500, 250, 100)
flecha1=new flecha(160,400, 100, 20)
sl=new Slingshot(flecha1.body, {x:190, y:370})
ovni1=new Ovny(600, 300, 100 )
ovny22=new Ovny1(800, 100, 50)
bl1=new Block(800, 500, 50, 50)
bg1=new tronco(800, 400, 100, 20)

}


function draw() {
  background(Background);  
  //imagen
image(base, -70, 280, 300, 300 )
image(arquero, 120, 335, 100, 125)
image(arco, 160, 330, 100, 120)

//display
ground1.display();
flecha1.display();
sl.display();
ovni1.display();
ovny22.display();
bl1.display();
bg1.display();

}


function mouseDragged(){
  Matter.Body.setPosition(flecha1.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
  sl.fly()
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(flecha1.body, {x:160, y:400})
    sl.attach(flecha1.body)
  }

}

