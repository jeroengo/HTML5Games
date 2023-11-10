class StarManager {
    constructor() {
        this.gameObjects = []

        this.spawnTimer = 0;
        this.spawnRate = 200;
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

        if (this.spawnTimer > this.spawnRate) {

            //console.log("spawning");

            this.addObject(new Bible(player.dirx,player.diry, 
                player.x + player.width / 2, 
                player.y + player.height / 2));

                this.spawnTimer = 0;
        }

        this.UpdateAll();
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

    CleanUp() {
        for (let i = 0; i < this.gameObjects.length; i++) {
            if (this.gameObjects[i].getAliveStatus() == false) {
                this.gameObjects.splice(i, 1);
            }
        }
    }
}