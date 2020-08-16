class Chain {
    constructor(body1, body2, offsetX, offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY

    var options = {
        bodyA: body1, 
        bodyB: body2,
        stiffness: 0.5,
        //length: 15,
        pointB: {x: this.offsetX, y: this.offsetY}
    }

    this.chain = Constraint.create(options);
    World.add(world, this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        strokeWeight(2);

        var Anachor1X = pointA.x
        var Anachor1Y = pointA.y

        var Anachor2X = pointB.x + this.offsetX
        var Anachor2Y = pointB.y + this.offsetY

        line (Anachor1X, Anachor1Y, Anachor2X, Anachor2Y);
        //line(pointA.x, pointA.y, pointB.X, pointB.y );
    }
}