class Star {
    constructor(dirx,diry, startx, starty) {
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

        this.animtime = 0;

        this.player;
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

        player = newPlayer.getPlayer();

        this.animtime++;

        this.object.x = Math.sin(this.animtime*0.05) * 100 + this.player.x;
        this.object.y = Math.cos(this.animtime*0.05) * 100 + this.player.y;

        //console.log("Bible!");
    }

    GetClosestEnemy(){

        let closestEnemy;

        for (let i = 0; i < objManager.gameObjects[i]; i++) {
            if(objManager.gameObjects[i].type == "enemy"){

                this.CalculateDistance(this.player.x, this.player,y, 
                    objManager.gameObjects[i].x,objManager.gameObjects[i].x);
            }
            

        }

        return closestEnemy;
    }

    CalculateDistance(x1,y1,x2,y2){
        const deltaX = y2 - x1;
        const deltaY = y2 - y1;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        return distance;
    }

    Draw() {
        ctx.fillStyle = "black";
        ctx.fillRect(this.object.x, this.object.y, this.object.width, this.object.height);
    }
}