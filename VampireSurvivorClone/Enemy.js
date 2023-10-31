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

        if (Collision(this.EnemyUnit, newPlayer.player)) {
            console.log("Collision happend");

            newEnemy = null;
        }

        this.Draw();

        this.moveTowardsPlayer();

        


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



