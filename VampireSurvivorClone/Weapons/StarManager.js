class StarManager {
    constructor() {
        this.gameObjects = []

        this.spawnTimer = 0;
        this.spawnRate = 200;

        this.player;

        this.closestEnemy;
        this.distance;
        this.newdistance;
    };

    addObject(object) {
        this.gameObjects.push(object)
    }

    removeObject(object) {

    }

    Update() {
        //console.log("Is this even running?");

        this.spawnTimer = this.spawnTimer + 1;
        let player = newPlayer.getPlayer();

        //console.log(this.spawnTimer);    

        this.UpdateAll();

        if (this.spawnTimer > this.spawnRate) {

            //console.log("spawning");
            if (this.closestEnemy) {

                this.addObject(new Star(this.closestEnemy.object.x, this.closestEnemy.object.y,
                    player.x + player.width / 2,
                    player.y + player.height / 2));

                this.spawnTimer = 0;
            }
        }
    }

    UpdateAll() {
        this.gameObjects.forEach(obj => {
            if (obj === null) {

                console.log("invallid type");
            }
            else {
                obj.Update();
            }
        });

        this.CleanUp();
    }

    GetClosestEnemy() {

        player = newPlayer.getPlayer();

        for (let i = 0; i < objManager.gameObjects[i]; i++) {
            if (objManager.gameObjects[i].type == "enemy") {

                this.newdistance = this.CalculateDistance(this.player.x, this.player, y, objManager.gameObjects[i].object.x, objManager.gameObjects[i].object.x);

                if (this.newdistance < this.distance) {
                    this.closestEnemy = objManager.gameObjects[i].object;
                }
            }
        }

        return closestEnemy;
    }

    CalculateDistance(x1, y1, x2, y2) {
        const deltaX = y2 - x1;
        const deltaY = y2 - y1;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        return distance;
    }

    CleanUp() {
        for (let i = 0; i < this.gameObjects.length; i++) {
            if (this.gameObjects[i].getAliveStatus() == false) {
                this.gameObjects.splice(i, 1);
            }
        }
    }
}