var keys = {};

const objManager = new ObjManager();

//objManager.addObject(newEnemy = new Enemy(300, 500));

//let newEnemy = new Enemy(300,300);

const newPlayer = new Player();

const newSpawner = new enemySpawner();



//let newEnemy2 = new Enemy(500, 500);
//const newEnemy2 = new Enemy(600, 100);

checkKeyInput();
Init();
gameLoop();



function Init(){
}

function gameLoop() {

    Render();


    newPlayer.Update();

    newSpawner.Update();

    objManager.UpdateAll();

    

    //newEnemy.Update();
    // if(newEnemy != null){
    // newEnemy.Update();
    // }   

    requestAnimationFrame(gameLoop);
}

function checkKeyInput() {

    console.log("Key Input listener added");

    document.addEventListener("keydown", function (event) {
        keys[event.code] = true;
    });

    document.addEventListener("keyup", function (event) {
        keys[event.code] = false;
    });
}

function Render() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function destroyObject(object){
    object = null;
}
