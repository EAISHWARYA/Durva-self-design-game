
var astGroup, ast1, ast2, ast3, ast4, ast5;
var bgImg, bg1,explosion,exImg;
var ast,ship,ship1;

var shipLife = 4;
var planet, planetImg;
var city, cityImg, bg2;

function preload(){
bgImg = loadImage("images/bg1.jpg");
ship1 = loadImage("images/ship.png");
ast1 = loadImage("images/ast1.png");
ast2 = loadImage("images/ast2.png");
ast3 = loadImage("images/ast3.png");
ast4 = loadImage("images/ast4.png");
ast5 = loadImage("images/ast5.png");
exImg = loadImage("images/explosion.png");
planetImg = loadImage("images/planet.png");
cityImg = loadImage("images/city.png");
bg2 = loadImage("images/bg2.png");
}

function setup(){
    createCanvas(600,650);
    bg1 = createSprite(300,325,650,700);
    bg1.addImage('1',bgImg);
    bg1.velocityX = -2;

    ship = createSprite(80,325,10,10);
    ship.addImage(ship1);
    ship.scale = 0.1
    astGroup = new Group();

    planet = createSprite(300,1000,40,40);
    planet.addImage(planetImg);
    planet.scale = 3;

    city=createSprite(300,500,50,50)
    city.scale=3.5
    city.visible=false
}

function draw(){
    background(0);

    if(bg1.x<200){ 
        bg1.x=300;
    }
    spawnAst();

    if(keyDown("UP_ARROW")){
        ship.y = ship.y - 4;
    }

    if(keyDown("DOWN_ARROW")){
       ship.y = ship.y + 4;
    }

    if(frameCount===100){
        planet.addImage(planetImg);
        planet.velocityY=-2
    }
    if(planet.isTouching(ship)){
        bg1.addImage('1',bg2)
    }
    if(planet.y<0){
        bg1.addImage('1',bg2)

       city.addImage('2',cityImg)
       city.visible=true
    }
    drawSprites();
    fill("white");
    textSize(14)
    text("Ship Defences: "+shipLife,460,45);
}

function spawnAst(){

    if(frameCount%72==0){
     ast = createSprite(600,random(0,650),20,20);
    ast.velocityX = -3
    ast.scale = 0.1

    var rand = Math.round(random(1,5));
    switch(rand){
        case 1: ast.addImage(ast1);
        break;
        case 2: ast.addImage(ast2);
        break;
        case 3: ast.addImage(ast3);
        break;
        case 4: ast.addImage(ast4);
        break;
        case 5: ast.addImage(ast5);
        break;
        default: break;
    }
    astGroup.add(ast);
}
}
