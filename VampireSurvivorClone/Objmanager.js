class ObjManager {
    constructor() {
        this.gameObjects = []
    };


    addObject(object) {
        this.gameObjects.push(object)
    }

    removeObject(object){
        this.gameObjects.pull(object);
    }

    UpdateAll() {
        this.gameObjects.forEach(obj => {
            obj.Update();
        });
    }
}