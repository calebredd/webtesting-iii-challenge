// Test away!
import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import Display from "./Display";

describe("<Display/>", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test("Renders correctly", () => {
  const locked = true;
  const closed = true;
  const { getByText } = render(<Display locked={locked} closed={closed} />);
  if (closed) {
    if (locked) {
      getByText(/locked/i);
    } else {
      getByText(/unlocked/i);
    }
    getByText(/closed/i);
  } else {
    getByText(/open/i);
    getByText(/unlocked/i);
  }
});
