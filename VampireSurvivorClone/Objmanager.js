class ObjManager {
    constructor() {
        this.gameObjects = []
    };


    addObject(object) {
        this.gameObjects.push(object)
    }

    removeObject(object) {
        this.gameObjects(object);
    }

    UpdateAll() {
        this.gameObjects.forEach(obj => {
            if (obj === null) {

                console.log("invallid type");
            }
            else{
                obj.Update();
            }
        });
    }
}