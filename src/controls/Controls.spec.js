// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Controls from "./Controls";

test("<Controls/>", () => {
  const tree = render(<Controls />);

  expect(tree.baseElement).toMatchSnapshot();
});

test("should render correctly", () => {
  const locked = false;
  const closed = true;
  const toggleLockedMock = jest.fn();
  const toggleClosedMock = jest.fn();
  const { getByText } = render(
    <Controls
      locked={locked}
      closed={closed}
      toggleLocked={toggleLockedMock}
      toggleClosed={toggleClosedMock}
    />
  );

  const lockButton = getByText(/open gate/i);
  const closeButton = getByText(/lock gate/i);
  fireEvent.click(closeButton);
  fireEvent.click(lockButton);
  expect(toggleLockedMock).toHaveBeenCalled();
  expect(toggleClosedMock).toHaveBeenCalled();
});
