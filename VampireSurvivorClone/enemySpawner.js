class enemySpawner {
    constructor() {
        this.timer = 0;
    }

    Update() {
        this.timer = this.timer + 1;
        
        if (this.timer > 5) {
            this.SpawnEnemy();   

            this.timer = 0;
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