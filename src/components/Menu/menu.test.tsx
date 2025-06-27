import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import type { RenderResult } from "@testing-library/react";
import react from "@vitejs/plugin-react";
//单元测试
import Menu from "./menu";
import type { MenuProps } from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

//测试普通的
const testProps: MenuProps = {
  defaultIndex: "0",
  className: "test",
  onSelect: jest.fn(),
};
//测试纵向
const testVerProps: MenuProps = {
  defaultIndex: "0",
  mode: "vertical",
};

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>Active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>Cool Link2</MenuItem>
      <MenuItem>Cool Link 3</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>drop1</MenuItem>
      </SubMenu>
    </Menu>
  );
};
//需要引入css
const createStyleFile = () => {
  const cssFile: string = `
  .cream-submenu{
  display:none;}
  .cream-submenu.menu-opened{
  display:block;}
  `;
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = cssFile;
  return style;
};
let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe("test Menu and MenuItem component", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    wrapper.container.append(createStyleFile()); //添加css样式
    menuElement = wrapper.getByTestId("test-menu");
    activeElement = wrapper.getByText("Active");
    disabledElement = wrapper.getByText("disabled");
  });
  it("should render Menu and MenuItem based on default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("cream-menu test");
    expect(menuElement.querySelectorAll(":scope > li").length).toEqual(5);
    expect(activeElement).toHaveClass("menu-item is-active");
    expect(disabledElement).toHaveClass("menu-item is-disabled");
  });
  //测试点击事件
  it("click items should change active and call the right callback", () => {
    const thirdItem = wrapper.getByText("Cool Link2");
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass("menu-item is-active");
    expect(activeElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith("2");
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).not.toHaveBeenCalledWith("1");
  });
  //mode为vertical的时候
  it("should render vertical mode when mode is set to vertical", () => {
    cleanup(); // 清理之前的渲染结果,不然warpper在dom渲染两次，会报错
    const wrapper = render(generateMenu(testVerProps));
    const menuElement = wrapper.getByTestId("test-menu");
    expect(menuElement).toHaveClass("menu-vertical");
  });
  //因为hover事件需要等待，所以需要使用testinglibrary中的waitFor来处理异步事件
  it("should show dropdown items when hover on subMenu", async () => {
    expect(wrapper.queryByText("drop1")).not.toBeVisible();
    const dropdownElement = wrapper.getByText("dropdown");
    fireEvent.mouseEnter(dropdownElement);
    await waitFor(() => {
      expect(wrapper.queryByText("drop1")).toBeVisible();
    });
    fireEvent.click(wrapper.getByText("drop1"));
    expect(testProps.onSelect).toHaveBeenCalledWith("4-0");
    fireEvent.mouseLeave(dropdownElement);
    await waitFor(() => {
      expect(wrapper.queryByText("drop1")).not.toBeVisible();
    });
  });
});
