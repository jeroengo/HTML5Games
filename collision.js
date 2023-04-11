function Collision() {

    for (var i = 0; i < cubes.length; i++) {

        if (player.x < cubes[i].x + cubes[i].width &&
            player.x + player.width > cubes[i].x &&
            player.y < cubes[i].y + cubes[i].height &&
            player.y + player.height > cubes[i].y) {

            if (player.x + player.width < cubes[i].x + 10) {
                // Player is colliding with left side of cube, adjust position
                player.x = cubes[i].x - player.width;
            } else if (player.x > cubes[i].x + cubes[i].width - 10) {
                // Player is colliding with right side of cube, adjust position
                player.x = cubes[i].x + cubes[i].width;
            } else if (player.y + player.height < cubes[i].y + 10) {
                // Player is colliding with top side of cube, adjust position
                player.y = cubes[i].y - player.height;
                player.velocity = 0;
                player.isJumping = false;
            } else if (player.y > cubes[i].y + cubes[i].height - 10) {
                // Player is colliding with bottom side of cube, adjust position
                player.y = cubes[i].y + cubes[i].height;
                player.velocity = 0;
            } else {
                // Player is not colliding with any side of cube
                player.y = cubes[i].y - player.height;
                player.velocity = 0;
                player.isJumping = false;
            }
        }
    }
}