import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Alert from "./alert";
const defaultProps = {
  onClose: jest.fn(),
};
describe("alert component test", () => {
  it("should render the correct default alert", () => {
    render(<Alert {...defaultProps} />);
    const element = screen.getByTestId("test");
    const span = screen.getByTestId("test-span");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("alert alert-info");
    fireEvent.click(span);
    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});
