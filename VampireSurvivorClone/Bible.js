class Bible {
    constructor(dirx,diry, startx, starty) {
        this.object = {
            width: 10,
            height: 30,
            x: startx,
            y: starty,
            speed: 15,
            damage: 1,
            isAlive: true,
            lifetime: 50
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

        //this.SelfDestruction();
        //this.CheckCollision();
        this.Move();
        this.Draw();

    }

    CheckCollision() {
        MultiCollision(this.object, objManager.gameObjects);
    }

    // SelfDestruction() {
    //     this.timer++;

    //     if (this.timer > this.object.lifetime) {
    //         this.object.isAlive = false;
    //         //console.log("Im going down!");
    //     }
    // }

    getAliveStatus() {
        return this.object.isAlive;
    }

    Move() {
        this.object.x = Math.sin(1)+ 100;

        //console.log("Bible!");
    }


    Draw() {
        ctx.fillStyle = "black";
        ctx.fillRect(this.object.x, this.object.y, this.object.width, this.object.height);
    }
}