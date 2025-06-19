import { render, fireEvent } from "@testing-library/react";
import Button, { type ButtonProps, ButtonSize, ButtonType } from "./button";
import "@testing-library/jest-dom";

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: "class",
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
  btnType: ButtonType.Link,
};

describe("test button component", () => {
  it("should render the correct default button", () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the correct component based on different props", () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn-primary btn-lg class");
  });
  it("should render a link when btnType is link and href is provided", () => {
    const wrapper = render(
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">
        Link
      </Button>
    );
    const element = wrapper.getByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A"); //希望是a链接
    expect(element).toHaveClass("btn btn-link");
  });
  it("should render a disabled button when disabled is true", () => {
    const wrapper = render(<Button {...disabledProps}>Link</Button>);
    const element = wrapper.getByText("Link") as HTMLButtonElement;
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
