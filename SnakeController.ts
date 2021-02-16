import Snake from "./Snake";

class SnakeController {
  _World: WorldModel;
  _Snake: Snake;
  snakeWorld: snakeWorld;
  slitherer: slitherer;
  
  constructor(w: WorldModel,s: Snake) {
    this._World = w;
    this._Snake = s;
  }
  turnSnakeLeft() {
    slitherer._Snake.turnLeft();
  }
  turnSnakeRight() {
    slitherer._Snake.turnRight();
  }
  get snakePosition() {
    return this._Snake;
  }
  get snakeDirection() {
    return this.direction;
  }
  get worldWidth() {
    return this.width;
  }
  get worldHeight() {
    return this.height:
  }
}
export default SnakeController;