class WeaponManager {
    constructor() {
        this.weapons = []

        this.spawnTimer = 0;
        this.spawnRate = 200;

        //this.addObject();
    };

    addObject(object) {
        this.weapons.push(object);
        //this.weapons.push(new BibleManager());        
    }

    removeObject(object) {
    }

    Update() {



    }

    UpdateAll() {

        if (keys.Space) {

            this.addObject(new KnifeManager());
        }

        if (this.weapons.length > 0) {
            this.weapons.forEach(element => {
                element.Update();
            });
        }

    }

    CleanUp() {

    }
}
