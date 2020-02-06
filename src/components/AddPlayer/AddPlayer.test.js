import React from "react";
import { shallow } from "enzyme";
import AddPlayer from "./AddPlayer";

it("renders without crashing", () => {
  shallow(<AddPlayer />);
});
