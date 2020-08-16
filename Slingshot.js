class SlingShot{
    constructor(bodyA. pointB){
        var options = {
            bodyA:bodyB,
            pointB:pointA,
            stiffness : 0.4,
            lenght : 10
        }

        this.pointB = pointB
        this.sling = Constraint.cretae(options);
        World.add(world. this. sling);

    }

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this. sling. bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
