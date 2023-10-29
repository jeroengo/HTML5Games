class BallClass {
    constructor(movespeed) {
       this.x = 50;
       this.y = 50;
       this.width = 50;
       this.height = 50;

       this.movespeed = movespeed;
        
    }      

    BallUpdate() {
        this.x += this.movespeed;
        this.DrawBall();
        
    }

    DrawBall() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        //console.log(this.x);
        
    }
}



