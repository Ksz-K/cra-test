import React from "react";
import Player from "./Player";
import { mount } from "enzyme";

it("should call onPlayerRemove with 0 when First delete button is clicked", () => {
  const mockedDeletePlayer = jest.fn();
  const playerComponent = mount(<Player deletePlayer={mockedDeletePlayer} />);

  const deleteButton = playerComponent.find(".Player_delete").first();

  deleteButton.simulate("click");

  expect(mockedDeletePlayer).toBeCalledWith(0);
});
