const Engine = Engine;
const World= World;
const Bodies = Bodies;
const Constraint = Constraint;

var engine, world;
var box1;
var platform,polygonImage;
var  slingShot;

function preload() {
    polygonImage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(150,200,100,20);
   
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40); 
    
    box8 = new Box(330,275,30,40);
    box9 = new Box(360,275,30,40);
    box10 = new Box(390,275,30,40);
    box11 = new Box(420,275,30,40);
    box12 = new Box(450,275,30,40);

    box13 = new Box(330,195,30,40);
    box14 = new Box(360,195,30,40);
    box15 = new Box(390,195,30,40);

    box16 = new Box(390,155,30,40);

    slingshot = new SlingShot(polygon.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
 
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    
    box13.display();
    box14.display();
    box15.display();

    box16.display();
   
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}