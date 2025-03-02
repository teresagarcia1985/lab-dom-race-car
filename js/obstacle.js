class Obstacle {
    constructor() {
      this.gameScreen = document.querySelector("#game-screen");
      this.positionsX = [70, 175, 175, 175, 70];
      this.randomIndex = Math.floor(Math.random() * this.positionsX.length);
      this.left = this.positionsX[this.randomIndex];
      this.top = -200;
      this.width = 60;
      this.height = 120;
      //this creates the <img /> in js to append to the game screen
      this.element = document.createElement("img");
      this.element.style.position = "absolute";
      this.element.src = "../images/redCar.png"; // './images/carImage.png'
      this.element.style.height = `${this.height}px`;
      this.element.style.width = `${this.width}px`;
      this.element.style.top = `${this.top}px`;
      this.element.style.left = `${this.left}px`;
      //this actually adds the img to the DOM
      this.gameScreen.appendChild(this.element);
    }
    move() {
      this.top += 5;
      this.updatePosition();
    }
    //this method visually shows us where the player move
    updatePosition() {
      this.element.style.top = `${this.top}px`;
      this.element.style.left = `${this.left}px`;
    }
  }