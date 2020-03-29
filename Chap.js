class Chap{
    constructor(x,y,width,height){
        var options={
               'restitution':1,
               'density':1,
               'friction':1,
               'isStatic':true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.height=350;
        this.width=150;
        this.image=loadImage("images/chap.jpeg");
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}