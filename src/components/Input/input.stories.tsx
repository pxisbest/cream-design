import type { Meta, StoryObj } from "@storybook/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import Input from "./input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ width: 300, padding: 20, border: '1px dashed #eee' }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Input 输入框，通过鼠标或键盘输入内容，是最基础的表单域的包装，支持 HTMLInput 的所有基本属性。

---

A basic Input element.
## 引用方法 ｜ Usage

\`\`\`js
import { Input } from 'cream-design'
\`\`\`


`,
      },
    },
  },
  argTypes: {
    onChange: { action: "changed" },
    size: { control: { type: "radio", options: ["sm", undefined, "lg"] } },
    disabled: {
      control: { type: "boolean" },
      description: "是否禁用输入框",
    },
    icon: {
      control: { type: "text" },
      description: "输入框前的图标，使用 FontAwesome 图标库",
    },
    prepend: {
      control: { type: "text" },
      description: "输入框前缀，可以是文本或 React 元素",
    },
    append: {
      control: { type: "text" },
      description: "输入框后缀，可以是文本或 React 元素",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// ===============================
// 不同输入框示例
// ===============================
export const DefaultInput: Story = {
  args: {
    placeholder: "Type something...",
  },
};
export const DisabledInput: Story = {
  args: {
    placeholder: "禁用状态",
    disabled: true,
  },
};

export const InputWithIcon: Story = {
    args: {
      placeholder: "带图标输入",
      icon: faSearch,
    },
    
    parameters: {
      docs: {
        description: {
          story: "通过 `icon` 属性传入图标 (FontAwesome) ",
        },
      },
    },
  };

  
  export const InputWithDifferentSizes: Story = {
    render: (args) => (
      <>
        <Input {...args} size="sm" placeholder="小号输入" style={{ marginBottom: 16 }} />
        <Input {...args} placeholder="默认输入" style={{ marginBottom: 16 }} />
        <Input {...args} size="lg" placeholder="大号输入" />
      </>
    ),
    args: {},
    parameters: {
      docs: {
        description: {
          story: "可以通过 `size` 属性设置输入框的大小 (sm / lg) ",
        },
      },
    },
  };

  export const InputWithPrefixSuffix: Story = {
    render: (args) => (
      <>
        <Input {...args} prepend="@" placeholder="用户名" style={{ marginBottom: 16 }} />
        <Input {...args} append=".00" placeholder="价格" />
      </>
    ),
    args: {},
    parameters: {
      docs: {
        description: {
          story: "使用 `prepend` 和 `append` 属性设置前缀和后缀",
        },
      },
    },
  };