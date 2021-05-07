import SnakeController from "./SnakeController";

abstract class Player {
  sc: SnakeController;
snake: any;
  constructor(sc: SnakeController) {
    this.sc = sc;
  }
  makeTurn(){

  }
  isActive() {
    this.snake.SnakeController == true;
  }
}

export default Player;