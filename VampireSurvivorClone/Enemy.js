class Enemy {
    constructor(spawnx, spawny) {
        this.EnemyUnit = {
            x: spawnx,
            y: spawny,
            width: 12.5,
            height: 12.5,
            speed: 1,
            velocity: 0,
            jumpStrength: 15,
            gravity: 1,
            isJumping: false,
            isAlive: true
        };
    }

    getAliveStatus(){
        return this.EnemyUnit.isAlive;
       }

    Update() {

        //console.log('Enemy updating');
        if (this.EnemyUnit != null) {

            this.Draw();
            this.moveTowardsPlayer();

            if (Collision(this.EnemyUnit, newPlayer.player)) {
               
                scoreManager.adjustScore(1);
                this.EnemyUnit.isAlive = false;

                //this.EnemyUnit = null;

            }
        }
    }

    moveTowardsPlayer() {

        var playerpos = {   x: newPlayer.getPlayerPostition().x + newPlayer.player.width / 2, 
                            y: newPlayer.getPlayerPostition().y + newPlayer.player.height / 2 };

        let directionX = playerpos.x - this.EnemyUnit.x;
        let directionY = playerpos.y - this.EnemyUnit.y;

        let distance = Math.sqrt(directionX * directionX + directionY * directionY);

        if (distance <= this.EnemyUnit.speed) {
            this.EnemyUnit.x = playerpos.x;
            this.EnemyUnit.y = playerpos.y;
            return; // Character has reached the target
          }

          // Normalize the direction vector
        let normalizedDirectionX = directionX / distance;
        let normalizedDirectionY = directionY / distance;

        // Update the character's position in the direction of the target
        this.EnemyUnit.x += normalizedDirectionX * this.EnemyUnit.speed;
        this.EnemyUnit.y += normalizedDirectionY * this.EnemyUnit.speed;
    }

    Draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.EnemyUnit.x, this.EnemyUnit.y, this.EnemyUnit.width, this.EnemyUnit.height);
    }
}



