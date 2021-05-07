
class MainMenuController {
playGameButton: any;
humanPlayersInput: any;
aiPlayersInput: any;
  constructor(g: Game) {
  this.playGameButton = document.createElement("button");
  this.humanPlayersInput= document.createElement("input");
  this.aiPlayersInput = document.createElement("input");
  }
  placeholder(){
    document.body.appendChild(this.playGameButton);
    document.body.appendChild(this.humanPlayersInput);
    document.body.appendChild(this.aiPlayersInput);
    document.createTextNode("Start Game!")
  }
  init(data) {
    document.body.appendChild(this.playGameButton);
  }
  switchContext() {
    document.body.removeChild(this.playGameButton);
    document.body.removeChild(this.humanPlayersInput);
    document.body.removeChild(this.aiPlayersInput);
  }
}
export default MainMenuController;