import display from "./display";
import Snake from "./Snake";
import WorldModel from "./WorldModel";

class canvasView {
  view: display;
  constructor(scaling: number) {
    canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    context = canvas.getContext("2d");
  }
  display(w: WorldModel){
    canvas.width = WorldModel.width*scaling.width;
    canvas.height = WorldModel.height*scaling.height;
  }
}

export default View;