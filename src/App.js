import React, { Component } from "react";
import AddPlayer from "./components/AddPlayer/AddPlayer";
import PlayersList from "./components/PlayersList/PlayersList";
import "./App.css";
class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          name: "Kunegunda",
          score: 5
        },
        {
          name: "Antoś",
          score: 0
        }
      ]
    };
  }

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, score: player.score + scoreChange };
        }
        return player;
      })
    });
  };

  onPlayerAdd = playerName => {
    const newPlayer = {
      name: playerName,
      score: 0
    };
    this.setState({
      players: [...this.state.players, newPlayer]
    });
  };
  deletePlayer = index => {
    this.setState({
      players: this.state.players.filter((player, i) => i !== index)
    });
  };

  render() {
    return (
      <div className="App">
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <PlayersList
          players={this.state.players}
          onScoreUpdate={this.onScoreUpdate}
          deletePlayer={this.deletePlayer}
        />
      </div>
    );
  }
}

export default App;
