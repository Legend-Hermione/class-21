class Box{
constructor(x,y,width,height){
 var ground_options ={
 restitution: 1.0
}
this.body=Bodies.rectangle
(x,y,width,height,ground_options);
World.add(world,this.body);
}

display(){
    rectMode(CENTER);
    fill(255,0,0);
    rect(this.body.position.x,
        this.body.position.y,this.width,
        this.height);
}
}