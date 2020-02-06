import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import AddPlayer from "./components/AddPlayer/AddPlayer";

it("Adding new Player return correct action", () => {
  const players = [];

  const appComponent = shallow(<App />);
  appComponent.setState({ players });
  const addNewName = appComponent.find(AddPlayer).prop("onPlayerAdd");

  const newPlayer = "NewPlayer";
  addNewName(newPlayer);

  const playersAfterUpdate = appComponent.state("players");

  expect(playersAfterUpdate[0].name).toEqual(newPlayer);

  expect(playersAfterUpdate.length).toEqual(1);
  expect(playersAfterUpdate[0].score).toEqual(0);
});
