var pos;
class Baseclass{
    constructor(x,y,width,height){
        var base_options={
               'restitution':1,
               'density':1,
               'friction':1,
               'isStatic':true
        }
        this.body=Bodies.rectangle(x,y,width,height,base_options);
        this.height=70;
        this.width=70;
        World.add(world,this.body);
        //if(frameCount%60===0){
          //  this.display();
       // }

    }
    display(){
        pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
       // velocity();
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }

}
//function velocity(){
    //var y=2;
  //  pos.y=pos.y+y;
//}