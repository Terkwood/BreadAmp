import { h } from "preact";
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from "enzyme";
import Home from "../routes/home/index";

describe("Initial Test of Home", () => {
  test("Home contains three buttons", () => {
    const context = shallow(<Home />);

    expect(context.find("button").length).toBe(3);
  });
});
