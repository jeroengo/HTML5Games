class Enemy {
    constructor(spawnx, spawny) {
        this.object = {
            x: spawnx,
            y: spawny,
            width: 12.5,
            height: 12.5,
            speed: 1,
            velocity: 0,
            isAlive: true,
            type: 'enemy'
        };
    }

    getAliveStatus(){
        return this.object.isAlive;
       }

    Update() {

        //console.log('Enemy updating');
        if (this.object != null) {

            this.Draw();
            this.moveTowardsPlayer();

            if (Collision(this.object, newPlayer.player)) {
               
                scoreManager.adjustScore(1);

                coinManager.addObject(new Coin(this.object.x, this.object.y));

                this.object.isAlive = false;

                //this.object = null;

            }
        }
    }

    moveTowardsPlayer() {

        var playerpos = {   x: newPlayer.getPlayer().x + newPlayer.player.width / 2, 
                            y: newPlayer.getPlayer().y + newPlayer.player.height / 2 };

        let directionX = playerpos.x - this.object.x;
        let directionY = playerpos.y - this.object.y;

        let distance = Math.sqrt(directionX * directionX + directionY * directionY);

        if (distance <= this.object.speed) {
            this.object.x = playerpos.x;
            this.object.y = playerpos.y;
            return; // Character has reached the target
          }

          // Normalize the direction vector
        let normalizedDirectionX = directionX / distance;
        let normalizedDirectionY = directionY / distance;

        // Update the character's position in the direction of the target
        this.object.x += normalizedDirectionX * this.object.speed;
        this.object.y += normalizedDirectionY * this.object.speed;
    }

    Draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.object.x, this.object.y, this.object.width, this.object.height);
    }
}



