import Snake from "./Snake";
import View from "./View";
import Actor from"./Actor";
import ActorCollisionHandlers from "./ActorCollisionHandlers";
class WorldModel {
  height: number;
  width: number;
  snakes: Actor;
  views: View[] = [];

  constructor(height, width, aca:ActorCollisionHandlers) {
    this.height = height;
    this.width = width;
  }
  public allSnakes() {
    return this.snakes;
  }
  public update(steps: number) {
    for (let snake of this.snakes) snake.move(steps);

    for (let view of this.views) view.display(this);

  }

  public get worldHeight() {
    return this.height;
  }
  public get worldWidth() {
    return this.width;
  }
  reset() {
    let View = [];
    let Actor = [];
  }
}

export default WorldModel;