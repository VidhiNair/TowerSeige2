const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plate1, plate2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20;
var hex, sling, heximg;
var bool1, arr1;

engine: engine;

//function preload(){
 //heximg = loadImage("hex.png");   
//}

function setup(){
  createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    plate1 = new Block(600,440,160,10,true);
    block1 = new Block(555,415,30,40,false);
    block2 = new Block(585,415,30,40,false);
    block3 = new Block(615,415,30,40,false);
    block4 = new Block(645,415,30,40,false);
    
    block5 = new Block(570,375,30,40,false);
    block6 = new Block(600,375,30,40,false);
    block7 = new Block(630,375,30,40,false);
    
    block8 = new Block(585,335,30,40,false);
    block9 = new Block(615,335,30,40,false);
    
    block10 = new Block(600,295,30,40,false);
    
    plate2 = new Block(800,370,160,10,true);   
    block11 = new Block(755,335,30,40,false);
    block12 = new Block(785,335,30,40,false);
    block13 = new Block(815,335,30,40,false);
    block14 = new Block(845,335,30,40,false);
    
    block15 = new Block(770,300,30,40,false);
    block16 = new Block(800,300,30,40,false);
    block17 = new Block(830,300,30,40,false);
    
    block18 = new Block(785,265,30,40,false);
    block19 = new Block(815,265,30,40,false);
    
    block20 = new Block(800,230,30,40,false);
    
    hex = new Block(200,300,30,30,false);
    hex.body.mass = 30000;
    hex.body.density = 50000;
    
    sling = new Slingshot(hex.body,{x:200,y:300})
    bool1 = 'a'
    
   arr1 = [block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20]
}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    plate1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    
    block5.display();
    block6.display();
    block7.display();
    
    block8.display();
    block9.display();
    
    block10.display();
    
    plate2.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    
    block15.display();
    block16.display();
    block17.display();
    
    block18.display();
    block19.display();
    
    block20.display();
    
    hex.display();
    imageMode(CENTER);
     //image(heximg,hex.body.position.x,hex.body.position.y,30,30)
    sling.display();
    if (bool1 == true){
      Matter.Body.setPosition(hex.body,{x:mouseX,y:mouseY});  
    }
    else{
        if (hex.body.position.x > 250){
            sling.fly()
            for(count = 1;count < 21;count++){
                if (arr1[count-1].body.speed > 8 && arr1[count-1].body != null)
               {
                   arr1[count-1].body.position = {x:600,y:700};
                    World.remove(world,arr1[count-1].body)  
               }
            }
        }
    }
    
}

function mouseDragged(){
    bool1 = true
}

function mouseReleased(){
    bool1 = false
    
}

function keyPressed(){
if (keyCode === 32 && sling.bodyA == null){
   hex = new Block(200,300,30,30,false);
    hex.body.mass = 30000;
    hex.body.density = 50000;
    sling = new Slingshot(hex.body,{x:200,y:300})
}
}
