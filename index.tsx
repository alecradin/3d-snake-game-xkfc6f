import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import display from './display';
import Snake from './Snake';
import SnakeTests from './SnakeTests';
import WorldModel from './WorldModel';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <pre id="output">
          OUTPUT: <br />
        </pre>
        {
            //  <SnakeTests />
        }
        {
          // <DuckTests />
        }
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

// Add display statements below

let snake = new Snake();

let world = new WorldModel(snake);

display(
  "Snake is at position " +
    world.snake.currentLocation.x +
    ", " + 
    world.snake.currentLocation.y
);

world.update(2);
display("I moved by 2");
display(
  "Snake is at position " +
    world.snake.currentLocation.x +
    ", " +
    world.snake.currentLocation.y
);

world.snake.turnLeft();
world.update(1);
display("I turned and moved 1");
display(
  "Snake is at position " +
    world.snake.currentLocation.x +
    ", " +
    world.snake.currentLocation.y
);
// display("Let's get started with React TypeScript!");


