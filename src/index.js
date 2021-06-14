import React from "react";
import { render } from "react-dom";
import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";
import { LoupGarou } from "./game";
import { LoupGarouBoard } from "./board";

const LoupGarouClient = Client({
  game: LoupGarou,
  board: LoupGarouBoard,
  debug: true,
  multiplayer: SocketIO({ server: "localhost:8000" })
});

class App extends React.Component {
  state = { playerID: null };

  render() {
    if (this.state.playerID === null) {
      return (
        <div>
          <p>Play as</p>
          <button onClick={() => this.setState({ playerID: "0" })}>
            Player 1
          </button>
          <button onClick={() => this.setState({ playerID: "1" })}>
            Player 2
          </button>
          <button onClick={() => this.setState({ playerID: "2" })}>
            Player 3
          </button>
          <button onClick={() => this.setState({ playerID: "3" })}>
            Player 4
          </button>
          <button onClick={() => this.setState({ playerID: "4" })}>
            Player 5
          </button>
          <button onClick={() => this.setState({ playerID: "5" })}>
            Player 6
          </button>
          <button onClick={() => this.setState({ playerID: "6" })}>
            Player 7
          </button>
          <button onClick={() => this.setState({ playerID: "7" })}>
            Player 8
          </button>
        </div>
      );
    }
    return (
      <div>
        <LoupGarouClient playerID={this.state.playerID} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
