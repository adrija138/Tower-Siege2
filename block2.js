class Block2{
  constructor(x,y,width,height){
      var options = {

          restituition: 0.4,
          friction:0.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world, this.body);

  }

  display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill(rgb(100,149,237));
      strokeWeight(1.5);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
      
  }
}