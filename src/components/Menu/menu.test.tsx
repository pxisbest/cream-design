import { cleanup, fireEvent, render } from "@testing-library/react";

import type { RenderResult } from "@testing-library/react";
import react from "@vitejs/plugin-react";
//单元测试
import Menu from "./menu";
import type { MenuProps } from "./menu";
import MenuItem from "./menuItem";

//测试普通的
const testProps: MenuProps = {
  defaultIndex: 0,
  className: "test",
  onSelect: jest.fn(),
};
//测试纵向
const testVerProps: MenuProps = {
  defaultIndex: 0,
  mode: "vertical",
};

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>Active</MenuItem>
      <MenuItem disabled index={1}>
        disabled
      </MenuItem>
      <MenuItem index={2}>Cool Link2</MenuItem>
      <MenuItem index={3}>Cool Link 3</MenuItem>
    </Menu>
  );
};

let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe("test Menu and MenuItem component", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    menuElement = wrapper.getByTestId("test-menu");
    activeElement = wrapper.getByText("Active");
    disabledElement = wrapper.getByText("disabled");
  });
  it("should render Menu and MenuItem based on default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("cream-menu test");
    expect(menuElement.getElementsByTagName("li").length).toEqual(4);
    expect(activeElement).toHaveClass("menu-item is-active");
    expect(disabledElement).toHaveClass("menu-item is-disabled");
  });
  //测试点击事件
  it("click items should change active and call the right callback", () => {
    const thirdItem = wrapper.getByText("Cool Link2");
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass("menu-item is-active");
    expect(activeElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith(2);
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
  });
  //mode为vertical的时候
  it("should render vertical mode when mode is set to vertical", () => {
    cleanup(); // 清理之前的渲染结果,不然warpper在dom渲染两次，会报错
    const wrapper = render(generateMenu(testVerProps));
    const menuElement = wrapper.getByTestId("test-menu");
    expect(menuElement).toHaveClass("menu-vertical");
  });
});
