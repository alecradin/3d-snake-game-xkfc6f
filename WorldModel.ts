import Snake from "./Snake";

class WorldModel {
  _snake : Snake;

  constructor(s: Snake) {
    this._snake = s;
  }
  update(steps: number) {
    this._snake.move(steps);
  }
  get snake() {
    return this._snake;
  }
}

export default WorldModel;