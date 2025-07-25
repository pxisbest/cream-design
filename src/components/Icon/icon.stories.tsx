import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./icon";
import {
  faCoffee,
  faCheckCircle,
  faExclamationTriangle,
  faSpinner,
  faGift,
  faGhost,
  faSnowflake,
  faGamepad,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof Icon> = {
  title: "Icon",
  tags: ["autodocs"],
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: `
提供了一套常用的图标集合，基于 [react-fontawesome](https://github.com/FortAwesome/react-fontawesome#basic)。

支持 \`react-fontawesome\` 的所有属性，可在官方文档查询。

支持 FontAwesome 的所有 \`free-solid-icons\`，可以在这里查看所有图标：
[FontAwesome 图标集合](https://fontawesome.com/icons?d=gallery&s=solid&m=free)

**引用方法：**
\`\`\`ts
import { Icon } from 'cream-design';
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    onClick: { action: "clicked" },
    theme: {
      description:
        "支持框架主题，根据主题显示不同的颜色。\n可选值：`primary` | `secondary` | `success` | `info` | `warning` | `danger` | `light` | `dark`",
      control: false, // 不给用户选
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

/* -------------------------------
   不同主题，一页多个示例
--------------------------------- */

export const IconsWithDifferentThemes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Icon icon={faGhost} theme="primary" size="2x" />
      <Icon icon={faCheckCircle} theme="success" size="2x" />
      <Icon icon={faExclamationTriangle} theme="warning" size="2x" />
      <Icon icon={faFire} theme="danger" size="2x" />
      <Icon icon={faCoffee} theme="info" size="2x" />
      <Icon icon={faGamepad} theme="dark" size="2x" />
      <Icon icon={faCoffee} theme="light" size="2x" />
    </div>
  ),
};

/* -------------------------------
   不同行为示例
--------------------------------- */

export const IconsWithDifferentBehaviors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
      <Icon icon={faSpinner} theme="info" size="3x" spin />
      <Icon icon={faSpinner} theme="warning" pulse size="3x" />
    </div>
  ),
};
