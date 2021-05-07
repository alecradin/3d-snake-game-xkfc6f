import Actor from "./Actor";
import Snake from "./Snake";
interface Colliadable {
  didCollide(a: Actor): void;
}
export default Collidable;