var cubes = [
    {
        x: 400,
        y: 450,
        width: 50,
        height: 200
    },
    {
        x: 200,
        y: 450,
        width: 50,
        height: 30
    }
];

// var cube2 = {
//     x: 400,
//     y: 450,
//     width: 50,
//     height: 200
// };

var floor = {
    x: 0,
    y: 550,
    width: canvas.width,
    height: 50
};

var cube = {
    x: 200,
    y: 450,
    width: 50,
    height: 30
};

var timer = 0;

function drawFloor() {
    ctx.fillStyle = "green";
    ctx.fillRect(floor.x, floor.y, floor.width, floor.height);
}

function drawCubes(){

    
    for (var i = 0; i < cubes.length; i++) {
        cubes[i].x + timer;

        ctx.fillStyle = "blue";
        ctx.fillRect(cubes[i].x, cubes[i].y, cubes[i].width, cubes[i].height);
    }

    timer++;
}

function drawCube() {
    ctx.fillStyle = "blue";
    ctx.fillRect(cube.x, cube.y, cube.width, cube.height);
}

// function drawCube2() {
//     ctx.fillStyle = "green";
//     ctx.fillRect(cube2.x, cube2.y, cube2.width, cube2.height);
// }