import Snake from "./Snake";

class WorldModel {
  _snake : Snake;
  width: number;
  height: number;

  constructor(s: Snake) {
    this._snake = s;
  }
  update(steps: number) {
    this._snake.move(steps);
  }
  get snake() {
    return this._snake;
  }
  get width () {
    return this.width;
  }
  get height () {
    return this.height;
  }
}

export default WorldModel;