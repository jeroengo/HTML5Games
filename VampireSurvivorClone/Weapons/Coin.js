class Coin {
    constructor(startx, starty) {
        this.object = {
            width: 10,
            height: 10,
            x: startx,
            y: starty,
            isAlive: true,
            inRange: false,
            speed: 5,
            type: 'coin'
        };

        let distance = 0;

        this.object.x -= this.object.width / 2;
        this.object.y -= this.object.height / 2;
    }


    Update() {

            // console.log("D" + this.CalculateDistance(this.object.x, this.object.y,
            //     newPlayer.getPlayer().x + newPlayer.getPlayer().width / 2,
            //     newPlayer.getPlayer().y + newPlayer.getPlayer().height / 2));

            if (this.CalculateDistance(this.object.x, this.object.y,
                newPlayer.getPlayer().x + newPlayer.getPlayer().width / 2,
                newPlayer.getPlayer().y + newPlayer.getPlayer().height / 2) <= 150)
                {
                this.object.inRange = true;
            }
        
        if (this.object.inRange == true) {

            this.moveTowardsPlayer();
        }

        this.Draw();
        this.CheckCollision();
    }



    CalculateDistance(x1, y1, x2, y2) {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        return distance;
    }


    CheckCollision() {

        if (Collision(this.object, newPlayer.player)) {
            scoreManager.adjustScore(1);
            this.SelfDestruction();
        }
    }

    SelfDestruction() {
        this.object.isAlive = false;
    }

    getAliveStatus() {
        return this.object.isAlive;
    }

    Move() {
    }

    moveTowardsPlayer() {

        var playerpos = {
            x: newPlayer.getPlayer().x + newPlayer.player.width / 2,
            y: newPlayer.getPlayer().y + newPlayer.player.height / 2
        };

        let directionX = playerpos.x - this.object.x;
        let directionY = playerpos.y - this.object.y;

        let distance = Math.sqrt(directionX * directionX + directionY * directionY);

        if (distance <= this.object.speed) {
            this.object.x = playerpos.x;
            this.object.y = playerpos.y;
            return; // Character has reached the target
        }

        // Normalize the direction vector
        let normalizedDirectionX1 = directionX / distance;
        let normalizedDirectionY1 = directionY / distance;

        // Update the character's position in the direction of the target
        this.object.x += normalizedDirectionX1 * this.object.speed;
        this.object.y += normalizedDirectionY1 * this.object.speed;
    }

    Draw() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.object.x, this.object.y, this.object.width, this.object.height);
    }
}