class Enemy {
    constructor() {
        this.EnemyUnit = {
            x: 120,
            y: 120,
            width: 20,
            height: 20,
            speed: 1,
            velocity: 0,
            jumpStrength: 15,
            gravity: 1,
            isJumping: false
        };

    }

    Update() {
        this.Draw();
        this.moveTowardsPlayer();
    }

    moveTowardsPlayer() {
        //console.log(this.EnemyUnit.x, this.EnemyUnit.y);

        if(this.EnemyUnit.x > playerpos.x){
            this.EnemyUnit.x -= this.EnemyUnit.speed;
        }
        if(this.EnemyUnit.x < playerpos.x){
            this.EnemyUnit.x += this.EnemyUnit.speed;
        }
        if(this.EnemyUnit.y > playerpos.y){
            this.EnemyUnit.y -= this.EnemyUnit.speed;
        }
        if(this.EnemyUnit.y < playerpos.y){
            this.EnemyUnit.y += this.EnemyUnit.speed;
        }
    }

    Draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.EnemyUnit.x, this.EnemyUnit.y, this.EnemyUnit.width, this.EnemyUnit.height);
    }
}



