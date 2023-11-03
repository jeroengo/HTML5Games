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

    }

    Update() {

        // Update player position based on user input or game logic
        if (keys.ArrowUp) {
            this.player.y -= this.player.speed;
        }
        if (keys.ArrowDown) {
            this.player.y += this.player.speed;
        }
        if (keys.ArrowLeft) {
            this.player.x -= this.player.speed;
        }
        if (keys.ArrowRight) {
            this.player.x += this.player.speed;
        }

        this.Draw();
    }

     

    Draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
    }

    getPlayerPostition() {
        return { x: this.player.x, y: this.player.y };
    }

}

