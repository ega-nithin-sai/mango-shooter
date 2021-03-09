class Slingshot{
    constructor(stone,pointB){
        var options = {
            bodyA: stone,
            pointB: pointB,
            length: 10,
            stiffness: 0.01,
            damping: 0.02
        }
        this.pointB = stone;
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    }
    display(){
        if(this.slingshot.bodyA){
        var pos1 = this.slingshot.bodyA.position;
        var pos2 = this.slingshot.pointB;

        push();
        stroke("black");
        strokeWeight(5);
        line(pos1.x, pos1.y, pos2.x, pos2.y);
        pop();
        }
    }
    fly(){
        this.slingshot.bodyA = null;
    }
}