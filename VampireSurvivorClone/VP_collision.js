function Collision(Self, Collider) {

    //for (var i = 0; i < Collider.length; i++) {

        if (Self.x < Collider.x + Collider.width &&
            Self.x + Self.width > Collider.x &&
            Self.y < Collider.y + Collider.height &&
            Self.y + Self.height > Collider.y) {

                return true;

            if (Self.x + Self.width < Collider[i].x + 10) {
                // Self is colliding with left side of cube, adjust position
                Self.x = Collider[i].x - Self.width;
            } else if (Self.x > Collider[i].x + Collider[i].width - 10) {
                // Self is colliding with right side of cube, adjust position
                Self.x = Collider[i].x + Collider[i].width;
            } else if (Self.y + Self.height < Collider[i].y + 10) {
                // Self is colliding with top side of cube, adjust position
                Self.y = Collider[i].y - Self.height;
                Self.velocity = 0;
                Self.isJumping = false;
            } else if (Self.y > Collider[i].y + Collider[i].height - 10) {
                // Self is colliding with bottom side of cube, adjust position
                Self.y = Collider[i].y + Collider[i].height;
                Self.velocity = 0;
            } else {
                // Self is not colliding with any side of cube
                Self.y = Collider[i].y - Self.height;
                Self.velocity = 0;
                Self.isJumping = false;
            }
        }
    }
//}