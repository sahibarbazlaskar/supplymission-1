var helicopterIMG, helicopterSprite, packageSprite,packageIMG,packageIMG1,packageIMG2,packageSprite1,packageSprite2;
var packageBody,packageBody1,packageBody2,ground;
var rectangle1,rectangle2,rectangle3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	packageIMG1=loadImage("package.png")
	packageIMG2=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageSprite1=createSprite(480, 80, 10,10);
	packageSprite1.addImage(packageIMG)
	packageSprite1.scale=0.2

	packageSprite2=createSprite(330, 80, 10,10);
	packageSprite2.addImage(packageIMG)
	packageSprite2.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	packageBody1 = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody1);

	packageBody2 = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody2);

	
    rectangle1=createSprite(250,610,20,100);
	rectangle1.shapeColor=color("red")
	rectangle2=createSprite(360,650,200,20);
	rectangle2.shapeColor=color("red")
	rectangle3=createSprite(470,610,20,100);
	rectangle3.shapeColor=color("red")
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
  packageSprite1.x= packageBody.position.x 
  packageSprite1.y= packageBody.position.y

  packageSprite2.x= packageBody.position.x 
  packageSprite2.y= packageBody.position.y

  
  packageSprite.collide(rectangle1);
  packageSprite.collide(rectangle2);
  packageSprite.collide(rectangle3);

  packageSprite1.collide(rectangle1);
  packageSprite1.collide(rectangle2);
  packageSprite1.collide(rectangle3);

  packageSprite2.collide(rectangle1);
  packageSprite2.collide(rectangle2);
  packageSprite2.collide(rectangle3);
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic (packageBody,false);
    }
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic (packageBody1,false);
		}
		if (keyCode === DOWN_ARROW) {
			Matter.Body.setStatic (packageBody2,false);
			}		
	
}



