class Bible {
    constructor(dirx,diry, startx, starty) {
        this.object = {
            width: 20,
            height: 30,
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

        this.animtime = 0;
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

        let player = newPlayer.getPlayer();

        this.animtime++;

        this.object.x = Math.sin(this.animtime*0.05) * 100 + player.x;
        this.object.y = Math.cos(this.animtime*0.05) * 100 + player.y;

        //console.log("Bible!");
    }


    Draw() {
        ctx.fillStyle = "black";
        ctx.fillRect(this.object.x, this.object.y, this.object.width, this.object.height);
    }
}