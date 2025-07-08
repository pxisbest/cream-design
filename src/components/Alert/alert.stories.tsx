import type { Meta, StoryObj } from "@storybook/react";
import Alert from "./alert";

const meta: Meta<typeof Alert> = {
  title: "Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
页面中最常用的警告元素

---

A commonly used button element for important messages.
## 引用方法 ｜ Usage

\`\`\`js
import { Alert } from 'cream-ui'
\`\`\`


`,
      },
    },
  },
    argTypes: {
        type: {
        control: { type: "select" },
        options: ["success", "default", "warning", "error"],
        description: `设置 Alert 的类型`,
        },
        closable: {
        control: { type: "boolean" },
        description: `是否可关闭`,
        },
        onClose: { action: "closed" },
        className: {type:'string'}
    },

};

type Story = StoryObj<typeof Alert>;

// ===============================
// 不同Alert示例
// ===============================
export const Default: Story = {
  args: {
    title: "默认 Alert",
    description: "这是一个默认的 Alert 示例",
  },
};
export const Success: Story = {
  args: {
    title: "成功 Alert",
    type: "success",
    description: "这是一个成功的 Alert 示例",
  },
};
export const Warning: Story = {
  args: {
    title: "警告 Alert",
    type: "warning",
    description: "这是一个警告的 Alert 示例",
  },
};
export const Error: Story = {
  args: {
    title: "错误 Alert",
    type: "danger",
    description: "这是一个错误的 Alert 示例",
  },
};

export default meta;
