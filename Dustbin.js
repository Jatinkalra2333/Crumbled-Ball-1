class Dustbin {

    constructor(x,y) {
        var options = {
            isStatic : false
    
           
        }

        this.bottomBody = Bodies.rectangle(x,y,200,20,options);
        this.leftBody =  Bodies.rectangle(x-100,y-10,20,100,options);
        this.rightBody = Bodies.rectangle(x+100,y-10,20,100,options);
        this.height = height;
        this.width = width;
        this.angle = 0;
Matter.Body.setAngle(this.leftBody,this.angle);
Matter.Body.setAngle(this.rightBody,-1*this.angle);
        World.add(world,this.bottomBody);
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
    }

    display(){
      
        push();
        translate(this.bottomBody.position.x,this.bottomBody.position.y);
        rectMode(CENTER);
        fill(255)
        rect(0,0,200,20);
    pop();

    push();
    translate(this.leftBody.position.x,this.leftBody.position.y);
    rotate(this.angle);
    rectMode(CENTER);
    fill(255)
    rect(0,0,20,100);
pop();

push();
translate(this.rightBody.position.x,this.rightBody.position.y);
rotate(-1*this.angle);
rectMode(CENTER);
fill(255)
rect(0,0,20,100);
pop();


    }

}