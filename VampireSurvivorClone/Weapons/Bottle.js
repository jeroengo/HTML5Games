class Bottle {
    constructor(dirx,diry, startx, starty) {
        this.object = {
            width: 10,
            height: 10,
            x: startx,
            y: starty,
            speed: getRndInteger(1,5),
            damage: 1,
            isAlive: true,
            lifetime: 50,
            gravity: 0.1,
            velocity: getRndInteger(-2,-4)
        };

        this.object.x -= this.object.width / 2;
        this.object.y -= this.object.height / 2;

        this.dir = {
            x: dirx,
            y: 0
        };

        this.timer = 0;
    }


    Update() {

        this.SelfDestruction();
        this.CheckCollision();
        this.Move();
        this.Draw();


    }

    CheckCollision() {
        MultiCollision(this.object, objManager.gameObjects);
    }

    SelfDestruction() {
        this.timer++;

        if (this.timer > this.object.lifetime) {
            this.object.isAlive = false;
            //console.log("Im going down!");
        }
    }

    getAliveStatus() {
        return this.object.isAlive;
    }

    Move() {       

        

        this.dir.y = 0;

        this.object.x += this.dir.x * this.object.speed;
        //this.object.y += this.dir.y * this.object.speed;

        this.object.velocity += this.object.gravity;
        this.object.y += this.object.velocity;
    }


    Draw() {
        ctx.fillStyle = "black";
        ctx.fillRect(this.object.x, this.object.y, this.object.width, this.object.height);
    }

    DoPhysics(physicsObject){
        // Apply gravity to the player
        physicsObject.velocity += physicsObject.gravity;
        physicsObject.y += physicsObject.velocity;
    
                // Keep the player above the floor
                // if (physicsObject.y + physicsObject.height > floor.y) {
                //     physicsObject.y = floor.y - physicsObject.height;
                //     physicsObject.velocity = 0;
                //     physicsObject.isJumping = false;
                // }
    }
}