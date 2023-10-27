function DoPhysics(physicsObject){
    // Apply gravity to the player
    physicsObject.velocity += physicsObject.gravity;
    physicsObject.y += physicsObject.velocity;

			// Keep the player above the floor
			if (physicsObject.y + physicsObject.height > floor.y) {
				physicsObject.y = floor.y - physicsObject.height;
				physicsObject.velocity = 0;
				physicsObject.isJumping = false;
			}
}