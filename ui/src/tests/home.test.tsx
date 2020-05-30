import { h } from "preact";
// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from "enzyme";
import Home from "../routes/home/index";

describe("Initial Test of Home", () => {
  test("Home renders two items", () => {
    const context = shallow(<Home />);
    expect(context.find("h1").text()).toBe("Home");
    expect(context.find("p").length).toBe(1);
  });
});
