import { render, fireEvent } from "@testing-library/react";
import Alert from "./alert";
import "@testing-library/jest-dom";

describe("test Alert component", () => {
  it("should render the correct default Alert", () => {
    const wrapper = render(<Alert title="Test Alert" />);
    const element = wrapper.getByText("Test Alert");
    expect(element).toBeInTheDocument();
    expect(element.parentElement).toHaveClass("alert alert-default");
    expect(wrapper.container.querySelector(".alert-close")).toBeInTheDocument();
  });

  it("should render correct Alert type", () => {
    const wrapper = render(<Alert title="Success Alert" type="success" />);
    const element = wrapper.getByText("Success Alert");
    expect(element.parentElement).toHaveClass("alert-success");
  });

  it("should render description if provided", () => {
    const wrapper = render(
      <Alert title="With Description" description="This is a description" />
    );
    expect(wrapper.getByText("This is a description")).toBeInTheDocument();
  });

  it("should not render close icon when closable is false", () => {
    const wrapper = render(<Alert title="Not Closable" closable={false} />);
    expect(wrapper.container.querySelector(".alert-close")).toBeNull();
  });

  it("should call onClose and remove Alert when close icon is clicked", () => {
    const onClose = jest.fn();
    const wrapper = render(<Alert title="Closable Alert" onClose={onClose} />);
    const closeElement = wrapper.container.querySelector(".alert-close");
    expect(closeElement).toBeInTheDocument();
    fireEvent.click(closeElement!);
    expect(onClose).toHaveBeenCalled();
    // Alert 应该被移除
    expect(wrapper.queryByText("Closable Alert")).toBeNull();
  });
});
