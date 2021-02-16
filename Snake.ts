import display from './display';
import Point from "./Point";
// place your code on line 5 above the export statement below
class Snake {
  currentLocation: point;
  currentDirection: number;
  constructor () {
    this.currentLocation = new Point(0,0);
    this.currentDirection = 1;
  }
  turnLeft() {
    this.currentDirection--;
    if (this.currentDirection == 0) this.currentDirection = 4;
  }
  turnRight() {
    this.currentDirection++;
    if (this.currentDirection == 5) this.currentDirection = 1;
  }
  move(steps: number) {
    let x = this.currentLocation.x;
    let y = this.currentLocation.y;

    if (this.currentDirection == 1) {
      y += steps;
    }
    if (this.currentDirection == 2) {
      x += steps;
    }
    if (this.currentDirection == 3) {
      y -= steps;
    }
    if (this.currentDirection == 4) {
      x -= steps;
    }

    this.currentLocation = new Point(x,y);
  }
  get direction() {
    return this.currentDirection;
  }
}
export default Snake;