    const Engine=Matter.Engine;
    const World=Matter.World;
    const Bodies=Matter.Bodies;
var ob1,ob2,ob3,ob4,ob5;
    var canvas;
    var bg;
    var chap;
    var world, engine;
    var gun;
    var burger,taco,meat,drink,donut;
    var y=100;
    var i;
  //  var invisiblewall;
    function preload(){
    bg=loadImage("images/bg.png");
    }

    function setup(){
    canvas=createCanvas(1300,600);
    engine=Engine.create();
    world=engine.world;
    frameRate(30);
    var options={
        isStatic:true,
       // opacity:false
    }
    chap= new Chap(1100,290,350,100);
    gun= new Gun(500,400,120,120);
    burger= new Burger(random(0,150),i);
    taco= new Taco(random(800,950),i);
    drink= new Drink(random(200,350),i);
    meat= new Meat(random(400,550),i);
    donut= new Donut(random(600,750),i);
    //invisiblewall=Bodies.rectangle(845,100,10,600,options);
    //World.add(world,invisiblewall);
    }

    function draw(){
    background(bg);
    Engine.update(engine);
    //rectMode(CENTER);
    //rect(invisiblewall.position.x,invisiblewall.position.x,10,600);
    y=y+1;
    if(y<0){
      y=this.height;
    }
    chap.display();
    gun.display();
    burger.display();
    taco.display();
    drink.display();
    meat.display();
    donut.display();
    var ran=random(1,5);
    switch(ran){
      case 1: ob1.addImage(donut);
      break;
      case 2: ob2.addImage(taco);
      break;
      case 3: ob1.addImage(drink);
      break;
      case 4: ob1.addImage(burger);
      break;
      case 5: ob1.addImage(meat);
      break;
      default: break;
    }
for(i=0;i<1235;i=i+2){

}
    }