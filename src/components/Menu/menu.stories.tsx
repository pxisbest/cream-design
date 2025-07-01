import type { Meta, StoryObj } from "@storybook/react";
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

const meta: Meta<typeof Menu> = {
  title: "Menu",
  component: Menu,
  tags: ["autodocs"],
  subcomponents: { Submenu: SubMenu },
  argTypes: {
    mode: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
    defaultIndex: {
      control: "text",
    },
    defaultOpenSubMenus: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Horizontal: Story = {
  args: {
    mode: "horizontal",
    defaultIndex: "0",
  },
  render: (args) => (
    <Menu {...args}>
      <MenuItem>Menu Item 1</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
      <SubMenu title="SubMenu">
        <MenuItem>Sub Item 1</MenuItem>
        <MenuItem>Sub Item 2</MenuItem>
      </SubMenu>
    </Menu>
  ),
};

export const Vertical: Story = {
  args: {
    mode: "vertical",
    defaultIndex: "0",
  },
  render: (args) => (
    <Menu {...args}>
      <MenuItem>Menu Item 1</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
      <SubMenu title="SubMenu">
        <MenuItem>Sub Item 1</MenuItem>
        <MenuItem>Sub Item 2</MenuItem>
      </SubMenu>
    </Menu>
  ),
};

export const VerticalWithDefaultOpen: Story = {
  args: {
    mode: "vertical",
    defaultIndex: "0",
    defaultOpenSubMenus: ["2"], // 假设 SubMenu 的 index 是 2
  },
  render: (args) => (
    <Menu {...args}>
      <MenuItem>Menu Item 1</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
      <SubMenu title="SubMenu">
        <MenuItem>Sub Item 1</MenuItem>
        <MenuItem>Sub Item 2</MenuItem>
      </SubMenu>
    </Menu>
  ),
};

