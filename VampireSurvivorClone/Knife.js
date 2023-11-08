class Knife {
    constructor(direction, startx, starty) {
        this.object = {
            width: 10,
            height: 10,            
            x: startx,
            y: starty,            
            speed: 15,
            damage: 1,
            isAlive: true
        };

        this.object.x -= this.object.width/2;
        this.object.y -= this.object.height/2;

        this.dir = {
            x: direction.x,
            y: direction.y
        };
    }

    Update() {

        this.Move();
        this.Draw();
    }
    
    getAliveStatus(){
        return this.object.isAlive;
       }

    Move() {
        this.object.x += this.dir.x * this.object.speed;
        this.object.y += this.dir.y * this.object.speed;
    }


    Draw() {
        ctx.fillStyle = "black";
        ctx.fillRect(this.object.x, this.object.y, this.object.width, this.object.height);
    }
}