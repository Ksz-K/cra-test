import React from "react";
import Player from "../Player/Player";
import "./PlayersList.css";

const PlayersList = props => (
  <ul className="PlayersList">
    {props.players.map((player, i) => (
      <Player
        key={i}
        indeks={i}
        name={player.name}
        score={player.score}
        onPlayerScoreChange={points => props.onScoreUpdate(i, points)}
        deletePlayer={indeks => props.deletePlayer(indeks)}
      />
    ))}
  </ul>
);

export default PlayersList;
