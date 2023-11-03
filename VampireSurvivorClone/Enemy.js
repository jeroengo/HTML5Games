class Enemy {
    constructor(spawnx, spawny) {
        this.EnemyUnit = {
            x: spawnx,
            y: spawny,
            width: 50,
            height: 50,
            speed: 1,
            velocity: 0,
            jumpStrength: 15,
            gravity: 1,
            isJumping: false
        };

    }

    Update() {

        //console.log('Enemy updating');
        if (this.EnemyUnit != null) {



            this.Draw();

            this.moveTowardsPlayer();


            if (Collision(this.EnemyUnit, newPlayer.player)) {
                //console.log("Collision happend");

                this.EnemyUnit = null;
                //destroyObject(self);

                //objManager.gameObjects[0] = null;

                //objManager.removeObject(this);

                ///objManager.removeObject();
            }





        }


    }

    moveTowardsPlayer() {
        //console.log(this.EnemyUnit.x, this.EnemyUnit.y);

        var playerpos = { x: newPlayer.getPlayerPostition().x, y: newPlayer.getPlayerPostition().y };

        //console.log(playerpos);

        if (this.EnemyUnit.x > playerpos.x) {
            this.EnemyUnit.x -= this.EnemyUnit.speed;
        }
        if (this.EnemyUnit.x < playerpos.x) {
            this.EnemyUnit.x += this.EnemyUnit.speed;
        }
        if (this.EnemyUnit.y > playerpos.y) {
            this.EnemyUnit.y -= this.EnemyUnit.speed;
        }
        if (this.EnemyUnit.y < playerpos.y) {
            this.EnemyUnit.y += this.EnemyUnit.speed;
        }
    }

    Draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.EnemyUnit.x, this.EnemyUnit.y, this.EnemyUnit.width, this.EnemyUnit.height);
    }
}



