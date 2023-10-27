function Collision(CollidingObject) {

    for (var i = 0; i < cubes.length; i++) {

        if (CollidingObject.x < cubes[i].x + cubes[i].width &&
            CollidingObject.x + CollidingObject.width > cubes[i].x &&
            CollidingObject.y < cubes[i].y + cubes[i].height &&
            CollidingObject.y + CollidingObject.height > cubes[i].y) {

            if (CollidingObject.x + CollidingObject.width < cubes[i].x + 10) {
                // CollidingObject is colliding with left side of cube, adjust position
                CollidingObject.x = cubes[i].x - CollidingObject.width;
            } else if (CollidingObject.x > cubes[i].x + cubes[i].width - 10) {
                // CollidingObject is colliding with right side of cube, adjust position
                CollidingObject.x = cubes[i].x + cubes[i].width;
            } else if (CollidingObject.y + CollidingObject.height < cubes[i].y + 10) {
                // CollidingObject is colliding with top side of cube, adjust position
                CollidingObject.y = cubes[i].y - CollidingObject.height;
                CollidingObject.velocity = 0;
                CollidingObject.isJumping = false;
            } else if (CollidingObject.y > cubes[i].y + cubes[i].height - 10) {
                // CollidingObject is colliding with bottom side of cube, adjust position
                CollidingObject.y = cubes[i].y + cubes[i].height;
                CollidingObject.velocity = 0;
            } else {
                // CollidingObject is not colliding with any side of cube
                CollidingObject.y = cubes[i].y - CollidingObject.height;
                CollidingObject.velocity = 0;
                CollidingObject.isJumping = false;
            }
        }
    }
}