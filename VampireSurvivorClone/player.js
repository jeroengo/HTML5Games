class Player {
    constructor() {
        this.player = {
            x: 300,
            y: 300,
            width: 25,
            height: 25,
            speed: 5,
            velocity: 0,
            jumpStrength: 15,
            gravity: 1,
            isJumping: false
        };

        this.direction = {
            x: 0,
            y: 0
        };
    }

    Update() {

        this.PlayerMovement();
        this.Draw();
        this.AttackKnife();
    }

    AttackKnife() {

        //console.log(keys);

        if (keys.Space) {

            objManager.addObject(new Knife(this.direction, this.player.x + this.player.width*0.5, this.player.y + this.player.height/2));

        }
    }

    PlayerMovement() {

        let playerspeed = { x: 0, y: 0 };

        if (keys.ArrowUp) {
            playerspeed.y = -this.player.speed;
            this.direction.y = -1;

            if (keys.ArrowLeft == false && keys.ArrowRight == false) {
                this.direction.x = 0;
            }
        }

        if (keys.ArrowDown) {
            playerspeed.y = this.player.speed;
            this.direction.y = 1;

            if (keys.ArrowLeft == false && keys.ArrowRight == false) {
                this.direction.x = 0;
            }
        }

        if (keys.ArrowLeft) {
            playerspeed.x = -this.player.speed;
            this.direction.x = -1;

            if (keys.ArrowUp == false && keys.ArrowDown == false) {
                this.direction.y = 0;
            }
        }

        if (keys.ArrowRight) {
            playerspeed.x = this.player.speed;
            this.direction.x = 1;

            if (keys.ArrowUp == false && keys.ArrowDown == false) {
                this.direction.y = 0;
            }
        }


        //Normalisation of diagonals
        let inputvector = Math.sqrt(playerspeed.x * playerspeed.x + playerspeed.y * playerspeed.y);

        if (inputvector !== 0) {
            playerspeed.x /= inputvector;
            playerspeed.y /= inputvector;
        }

        this.player.x += playerspeed.x * this.player.speed;
        this.player.y += playerspeed.y * this.player.speed;
    }

    getPlayerPostition() {
        return { x: this.player.x, y: this.player.y };
    }

    Draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
    }
}

