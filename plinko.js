class Plinko
{
    constructor(x,y,r)
    {
        var options=
        {
            isStatic : true
        }
        this.r=r;
        this.body = Bodies.circle(x,y,10,options);
        World.add(world, this.body);
    }

    
    display()
    {
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("white");
      ellipseMode(RADIUS);
      ellipse(0,0,10,10);
      pop();
    }
}