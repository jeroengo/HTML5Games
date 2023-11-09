function Collision(Self, Collider) {

    //for (var i = 0; i < Collider.length; i++) {

    if (Self.x < Collider.x + Collider.width &&
        Self.x + Self.width > Collider.x &&
        Self.y < Collider.y + Collider.height &&
        Self.y + Self.height > Collider.y) {

        return true;
    }
}

function MultiCollision(Self, Colliders) {

    for (var i = 0; i < Colliders.length; i++) {

        if (Self.x < Colliders[i].object.x + Colliders[i].object.width &&
            Self.x + Self.width > Colliders[i].object.x &&
            Self.y < Colliders[i].object.y + Colliders[i].object.height &&
            Self.y + Self.height > Colliders[i].object.y) {

            if (Colliders[i].object.type == "enemy") {
                Colliders[i].object.isAlive = false;
            }

            //return Colliders[i.object];
        }
    }
}