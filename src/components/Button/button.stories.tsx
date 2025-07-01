import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    btnType: {
      control: { type: 'select' },
      options: ['primary', 'default', 'danger', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['lg', 'sm'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    href: {
      control: { type: 'text' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// ===============================
// 不同按钮示例
// ===============================

export const Primary: Story = {
  args: {
    btnType: 'primary',
    size: 'lg',
    children: 'Primary Button',
  },
};

export const Default: Story = {
  args: {
    btnType: 'default',
    size: 'sm',
    children: 'Default Button',
  },
};

export const Danger: Story = {
  args: {
    btnType: 'danger',
    children: 'Danger Button',
  },
};

export const Link: Story = {
  args: {
    btnType: 'link',
    href: 'https://storybook.js.org',
    children: 'Link Button',
  },
};

export const DisabledLink: Story = {
  args: {
    btnType: 'link',
    href: 'https://storybook.js.org',
    disabled: true,
    children: 'Disabled Link',
  },
};