import display from './display';

// place your code on line 5 above the export statement below

class Point {
  private xcoord: number;
  private ycoord: number;
  public constructor() {
    this.xcoord = xcoord;
    this.ycoord = ycoord;
  }
  public get nPoint() {
  return this.xcoord,this.ycoord;
  }
}
class Snake {
  private currentPosition: number;
  private currentDirection: number;
  public constructor () {
    this.currentPosition = 0;
    this.currentDirection = 1;
  }
  public move(squares:number){
  this.currentPosition += this.currentDirection * squares;
  if (this.position = newPoint(this.position.x,this.position.y)) return this.position 
  }
  public turn(){
    this.currentDirection *= -1;
  }
  public get position() {
    return this.currentPosition;
  }
  set newPoint (initialPoint:number) {
    this.xcoord = 0;
    this.ycoord = 0;
  }
  public turnLeft () {
    if (this.xcoord < 0) display ("Left")
    else if (this.ycoord < 0) display ("Down")
    else if (this.xcoord > 0) display ("Right")
    else display ("Up")
  }
  public turnRight () {
    if (this.xcoord > 0) display ("Right")
    else if (this.xoord < 0) display ("Left")
    else if (this.ycoord < 0) display ("Down")
    else display ("Up")
  }
  
}
export default Snake;