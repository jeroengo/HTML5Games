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

        

        this.PlayerMovement();
        this.Draw();

    }

     

    Draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
    }

    getPlayerPostition() {
        return { x: this.player.x, y: this.player.y };
    }

    PlayerMovement(){
        // Update player position based on user input or game logic

        let playerspeed = {x:0,y:0};        

        if (keys.ArrowUp) {
            playerspeed.y = -this.player.speed;
        }
        if (keys.ArrowDown) {
            playerspeed.y = this.player.speed;
        }
        if (keys.ArrowLeft) {
            playerspeed.x = -this.player.speed;
        }
        if (keys.ArrowRight) {
            playerspeed.x = this.player.speed;
        }

        if(playerspeed.x + playerspeed.y == 2){
            playerspeed.x = playerspeed.x * 0.1;
            playerspeed.y = playerspeed.y * 0.1; 
        }
        //als movement speed groter is dan 2

        

        //let distance = Math.sqrt(directionX * directionX + directionY * directionY);
        let inputvector = Math.sqrt(playerspeed.x*playerspeed.x + playerspeed.y * playerspeed.y);

        if(inputvector !== 0){
           playerspeed.x /= inputvector;
           playerspeed.y /= inputvector;
        }



        this.player.x += playerspeed.x * this.player.speed;
        this.player.y += playerspeed.y * this.player.speed;
    }

}

