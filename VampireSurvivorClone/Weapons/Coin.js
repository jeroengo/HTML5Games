class Coin {
    constructor(startx, starty) {
        this.object = {
            width: 10,
            height: 10,
            x: startx,
            y: starty,
            isAlive: true
        };

        this.object.x -= this.object.width / 2;
        this.object.y -= this.object.height / 2;
    }


    Update() {

        this.CheckCollision();
        this.Move();
        this.Draw();
    }

    CheckCollision() {
        MultiCollision(this.object, newPlayer.player);
    }

    SelfDestruction() {
        this.object.isAlive = false;
    }

    getAliveStatus() {
        return this.object.isAlive;
    }

    Move() {
    }


    Draw() {
        ctx.fillStyle = "black";
        ctx.fillRect(this.object.x, this.object.y, this.object.width, this.object.height);
    }
}