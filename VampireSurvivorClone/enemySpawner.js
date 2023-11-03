class enemySpawner {
    constructor() {
        this.timer = 0;
    }

    Update() {
        this.timer = this.timer + 1;
        console.log(this.timer);
        if (this.timer > 100) {
            this.SpawnEnemy();
            this.timer = 0;
        }
    }


    SpawnEnemy() {
        objManager.addObject(new Enemy(600, 600));
    }

}