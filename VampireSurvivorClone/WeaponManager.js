class WeaponManager {
    constructor() {
        this.weapons = []

        this.spawnTimer = 0;
        this.spawnRate = 200;

        this.addObject();
    };

    

// const knifeManager = new KnifeManager();
// const bibleManager = new BibleManager();

    addObject(object) {
        this.weapons.push(new KnifeManager());
        this.weapons.push(new BibleManager());
        
    }

    removeObject(object) {

    }

    Update() {

    }

    UpdateAll() {

        this.weapons.forEach(element => {
            element.Update();
        });

    }

    CleanUp() {

    }
}
