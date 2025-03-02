class Projectile {
    constructor(left, top) {
      this.gameScreen = document.querySelector("#game-screen");
      this.left = left;
      this.top = top;
      this.width = 10;
      this.height = 30;
      //this creates the <img /> in js to append to the game screen
      this.element = document.createElement("img");
      this.element.style.position = "absolute";
      this.element.src = "../images/bullet.png"; // './images/carImage.png'
      this.element.style.height = `${this.height}px`;
      this.element.style.width = `${this.width}px`;
      this.element.style.top = `${this.top}px`;
      this.element.style.left = `${this.left}px`;
      //this actually adds the img to the DOM
      this.gameScreen.appendChild(this.element);
    }
    move() {
      this.top -= 3;
      this.updatePosition();
    }
    //this method visually shows us where the player move
    updatePosition() {
      this.element.style.top = `${this.top}px`;
      this.element.style.left = `${this.left}px`;
    }
    didCollide(obstacle) {
      const projectileRect = this.element.getBoundingClientRect();
      const obstacleRect = obstacle.element.getBoundingClientRect();
  
      if (
        projectileRect.left < obstacleRect.right &&
        projectileRect.right > obstacleRect.left &&
        projectileRect.top < obstacleRect.bottom &&
        projectileRect.bottom > obstacleRect.top
      ) {
        return true;
      } else {
        return false;
      }
    }
  }