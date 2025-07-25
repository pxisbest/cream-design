import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Welcome",
  parameters: {
    docs: {
      description: {
        component: `
# Cream Design 组件库

一个轻量级的 React UI 组件库，使用 TypeScript + Vite 构建，适合快速开发现代 Web 应用。
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Welcome: Story = {
  render: () => (
    <div
      style={{
        padding: "48px 32px",
        maxWidth: 880,
        margin: "0 auto",
        fontFamily: "'Segoe UI', Roboto, sans-serif",
        lineHeight: 1.75,
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: 16 }}>
        🌟 Cream Design 组件库
      </h1>
      <p style={{ fontSize: "1.125rem", color: "#444" }}>
        一个轻量级的 React UI 组件库，使用 TypeScript + Vite
        构建，适合快速开发现代 Web 应用。
      </p>
      <a
        href="https://cream-design.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "1rem",
          textDecoration: "underline",
          display: "inline-block",
        }}
      >
        在线预览组件
      </a>
      <ul style={{ paddingLeft: 20 }}>
        <li>🚀 常用 UI 组件封装（Button、Input、Menu、AutoComplete 等）</li>
        <li>💡 全量 TypeScript 支持，类型声明完整</li>
        <li>🎨 SCSS 样式模块，主题可拓展</li>
        <li>📖 支持 Storybook 组件预览</li>
      </ul>

      <hr style={{ margin: "32px 0" }} />

      <h2>📦 安装</h2>
      <pre style={{ background: "#f5f5f5", padding: 12, borderRadius: 6 }}>
        <code>npm install cream-design</code>
      </pre>

      <h2>⚡ 快速上手</h2>
      <ol>
        <li>
          <strong>引入样式</strong>
          <pre style={{ background: "#f5f5f5", padding: 12, borderRadius: 6 }}>
            <code>import 'cream-design/style';</code>
          </pre>
        </li>
        <li>
          <strong>引入组件</strong>
          <pre style={{ background: "#f5f5f5", padding: 12, borderRadius: 6 }}>
            <code>import {"{ Button, Input, Menu }"} from 'cream-design';</code>
          </pre>
        </li>
        <li>
          <strong>使用示例</strong>
          <pre style={{ background: "#f5f5f5", padding: 12, borderRadius: 6 }}>
            <code>{`<Button btnType="primary">Hello Cream</Button>`}</code>
          </pre>
        </li>
      </ol>

      <hr style={{ margin: "32px 0" }} />

      <h2>🧩 兼容性</h2>
      <ul>
        <li>支持 React 16.8 及以上版本</li>
        <li>支持 TypeScript 4.x 及以上</li>
      </ul>

      <hr style={{ margin: "32px 0" }} />

      <h2>🙌 更多更新</h2>
      <p>
        欢迎访问{" "}
        <a
          href="https://github.com/pxisbest/cream-design"
          target="_blank"
          rel="noreferrer"
        >
          GitHub 项目
        </a>{" "}
      </p>
    </div>
  ),
};
