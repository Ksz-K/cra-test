import React from "react";
import "./Player.css";

const Player = props => (
  <li className="Player">
    <span className="Player__name">{props.name}</span>
    <span className="Player__score">{props.score}</span>
    <span
      className="Player__button"
      onClick={() => props.onPlayerScoreChange(1)}
    >
      +
    </span>
    <span
      className="Player__button"
      onClick={() => props.onPlayerScoreChange(-1)}
    >
      -
    </span>
    <span
      className="Player_delete"
      onClick={() => props.deletePlayer(props.indeks)}
    >
      X
    </span>
  </li>
);

export default Player;
