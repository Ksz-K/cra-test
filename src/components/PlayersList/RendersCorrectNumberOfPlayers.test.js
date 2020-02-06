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
  const playerComponent = shallow(<PlayersList players={players} />);

  const expectedPlayersNumber = playerComponent.find(Player).length;

  //console.log(playerComponent.debug());
  expect(expectedPlayersNumber).toEqual(2);
});
