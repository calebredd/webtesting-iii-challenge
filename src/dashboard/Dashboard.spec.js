// Test away
import React from "react";
// import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("<Dashboard/>", () => {
  const tree = render(<Dashboard />);

  expect(tree.baseElement).toMatchSnapshot();
});

// test("it is mocking me", () => {
//   const mock = jest.fn();
//   // const actual = mock("smile");

//   expect(mock).toHaveBeenCalled();
//   // expect(mock).toHaveBeenCalledTimes(2);
//   expect(mock).toHaveBeenCalledTimes(1);
//   expect(mock).toHaveBeenCalledWith("smile");
//   // expect(mock).toHaveBeenCalledWith("we");
// });
