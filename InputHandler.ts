import Player from "./Player";
import Snake from "./Snake";
interface InputHandler {
  madeLeftMove(p: Player): void;
  madeRightMove(p: Player): void;
  resetLeftMove(s: Snake): void;
  resetRightMove(s: Snake): void;
}
export default InputHandler;