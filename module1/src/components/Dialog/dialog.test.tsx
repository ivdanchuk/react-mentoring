import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dialog, { IDialogProps } from "./dialog";
import { fn } from "@storybook/test";

afterEach(cleanup);

const mockProps: IDialogProps = {
  title: "Add movie",
  onClose: fn(),
  children: <p>Test children</p>,
};
describe("Dialog modal form", () => {
  test("renders title", () => {
    render(<Dialog {...mockProps} />);
    expect(screen.getByText("Add movie")).toBeInTheDocument();
  });

  test("renders children", () => {
    render(<Dialog {...mockProps} />);
    expect(screen.getByText("Test children")).toBeInTheDocument();
  });

  test("calls onClose", () => {
    render(<Dialog {...mockProps} />);
    fireEvent.click(screen.getByText("X"));
    expect(mockProps.onClose).toHaveBeenCalled();
  });
});
