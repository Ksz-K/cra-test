import PlayersList from "./PlayersList";
import Player from "../Player/Player";
import React from "react";
import { shallow } from "enzyme";

it("should return number of Li elements", () => {
  const players = [
    {
      name: "Kunegunda",
      score: 5
    },
    {
      name: "Antoś",
      score: 0
    }
  ];

  const mockedOnScoreUpdate = jest.fn();

  const playerComponent = shallow(
    <PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />
  );

  const firstPlayer = playerComponent.find(Player).first();

  const onPlayerScoreChange = firstPlayer.prop("onPlayerScoreChange");

  onPlayerScoreChange(10);

  expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
});
