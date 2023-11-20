class enemySpawner {
    constructor() {
        this.timer = 180;
        this.spawnrate = 200;
    }

    Update() {
        this.timer = this.timer + 1;
        
        if (this.timer > this.spawnrate) {
            this.SpawnEnemy();   

            this.timer = 0;
            this.spawnrate = this.spawnrate - 1;
        }        
    }


    SpawnEnemy() {

        let spawnPos = {
            x: this.getRndInteger(1,800),
            y : this.getRndInteger(1,600)
        }
        
        objManager.addObject(new Enemy(spawnPos.x, spawnPos.y));
    }

    getRndInteger(min, max){
        return Math.floor(Math.random() * (max-min)) + min;
    }

}