import App from "../../App";
import PlayersList from "../PlayersList/PlayersList";
import React from "react";
import { shallow } from "enzyme";

it("should update player list", () => {
  const players = [
    {
      name: "Kunegunda",
      score: 5
    }
  ];

  const appComponent = shallow(<App />);

  appComponent.setState({ players });

  const deleteName = appComponent.find(PlayersList).prop("deletePlayer");

  deleteName(0);

  const playersAfterUpdate = appComponent.state("players");

  expect(playersAfterUpdate).toEqual([]);
});
