class Star {
    constructor(dirx, diry, startx, starty) {
        this.object = {
            width: 20,
            height: 20,
            x: startx,
            y: starty,
            speed: 15,
            damage: 1,
            isAlive: true,
            lifetime: 400
        };

        this.object.x -= this.object.width / 2;
        this.object.y -= this.object.height / 2;

        this.dir = {
            x: dirx,
            y: diry
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

        moveTowardsTarget();

    }

    moveTowardsTarget() {
        
        // Update the character's position in the direction of the target
        this.object.x += this.object.dirx * this.object.speed;
        this.object.y += this.object.diry * this.object.speed;
    }


    Draw() {
        ctx.fillStyle = "black";
        ctx.fillRect(this.object.x, this.object.y, this.object.width, this.object.height);
    }
}
