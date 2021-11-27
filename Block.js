class Block{
    constructor(x, y, width, height) {
        var options = {
          'friction':2.4,
          'density':5
        }
      
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image= loadImage("caja.png")
        World.add(world, this.body);
      }
      
      display(){
        var pos= this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x, pos.y,this.width, this.height);

      }
}
