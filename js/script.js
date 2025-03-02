window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let ourGame;
  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", () => {
    window.location.reload();
  });

  //this is the event listener for the keyboard arrow keys
  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") {
      ourGame.player.directionX = 2;
    }
    if (event.code === "ArrowLeft") {
      ourGame.player.directionX = -2;
    }

    //this controls the player going up and down
    if (event.code === "ArrowUp") {
      ourGame.player.directionY = -2;
    }
    if (event.code === "ArrowDown") {
      ourGame.player.directionY = 2;
    }
    //listener for the space bar to shoot the projectile
    if (event.code === "Space") {
      ourGame.projectiles.push(
        new Projectile(ourGame.player.left + 25, ourGame.player.top - 30)
      );
      //this will play when the space bar is pushed
      ourGame.shoot.play();
    }
  });

  //this event listener sets the directions to 0 when the keys are released
  document.addEventListener("keyup", (event) => {
    if (event.code === "ArrowRight") {
      ourGame.player.directionX = 0;
    }
    if (event.code === "ArrowLeft") {
      ourGame.player.directionX = 0;
    }

    //this controls the player going up and down
    if (event.code === "ArrowUp") {
      ourGame.player.directionY = 0;
    }
    if (event.code === "ArrowDown") {
      ourGame.player.directionY = 0;
    }
  });
  function startGame() {
    console.log("start game");
    // actually creates the game object and stores it in the variable
    ourGame = new Game();
    //this calls the start method on our Game class
    ourGame.start();
  }
};