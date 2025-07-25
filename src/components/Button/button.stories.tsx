import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      // 这里可以添加全局的文档描述
      description: {
        component: `
页面中最常用的按钮元素，适合用于完成特定的交互，支持 HTML \`<button>\` 和 \`<a>\` 链接的所有属性。

---

A commonly used button element for performing specific interactions.  Supports all properties of HTML \`<button>\` and \`<a>\` elements.
## 引用方法 ｜ Usage

\`\`\`js
import { Button } from 'cream-design'
\`\`\`


`,
      },
    },
  },
  argTypes: {
    btnType: {
      control: { type: "select" },
      options: ["primary", "default", "danger", "link"],
      description: `设置 Button 的类型`,
    },
    size: {
      control: { type: "select" },
      options: ["lg", "sm"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    href: {
      control: { type: "text" },
    },
    children: {
      control: { type: "text" },
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// ===============================
// 不同按钮示例
// ===============================

export const Primary: Story = {
  args: {
    btnType: "primary",
    size: "lg",
    children: "Primary Button",
  },
  parameters: {
    docs: {
      description: {
        story: "一个基础的 Primary 按钮示例。",
      },
    },
  },
};

export const Default: Story = {
  args: {
    btnType: "default",
    size: "sm",
    children: "Default Button",
  },
};

export const Danger: Story = {
  args: {
    btnType: "danger",
    children: "Danger Button",
  },
};

export const Link: Story = {
  args: {
    btnType: "link",
    href: "https://storybook.js.org",
    children: "Link Button",
  },
};

export const DisabledLink: Story = {
  args: {
    btnType: "link",
    href: "https://storybook.js.org",
    disabled: true,
    children: "Disabled Link",
  },
};
