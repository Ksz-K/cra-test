import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import PlayersList from "./components/PlayersList/PlayersList";

it("Removing Player return correct action", () => {
  const players = [
    {
      name: "Kunegunda",
      score: 5
    },
    {
      name: "Antek",
      score: 7
    }
  ];

  const appComponent = shallow(<App />);
  appComponent.setState({ players });
  const removeName = appComponent.find(PlayersList).prop("deletePlayer");

  removeName(0);

  const playersAfterUpdate = appComponent.state("players");

  expect(playersAfterUpdate[0].name).toEqual("Antek");

  expect(playersAfterUpdate.length).toEqual(1);
  expect(playersAfterUpdate[0].score).toEqual(7);
});
