class Ovny1{
    constructor(x, y, r){
        var options={
           isStatic:true
        }
        this.x=x;
		this.y=y;
		this.r=r
this.image=loadImage("ovni1.png")
this.body=Bodies.circle(x, y, r, options);
World.add(world, this.body);
    }

    display(){
imageMode(CENTER)
image(this.image, this.body.position.x, this.body.position.y, this.r*2, this.r*2)

    }

}