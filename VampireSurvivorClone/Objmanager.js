class ObjManager {
    constructor() {
        this.gameObjects = []
    };


    addObject(object) {
        this.gameObjects.push(object)
    }

    removeObject(object) {

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

            //if (this.gameObjects[i] == null) {

                if (this.gameObjects[i].getAliveStatus() == false) {

                    this.gameObjects.splice(i, 1);
                }
           // }
        }
    }
}