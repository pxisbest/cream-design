import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AutoComplete, type AutoCompleteProps, type DataSourceType } from "./autoComplete";

// 定义通用 Story 类型，用于不同的数据结构
type GenericStory<T> = StoryObj<React.FC<AutoCompleteProps<T>>>;

// =====  Story 1: 基本字符串搜索 =====
export const BasicSearch: GenericStory<{}> = {
  args: {
    placeholder: "输入水果名",
    fetchSuggestions: (query) => {
      const fruits = ["apple", "banana", "cherry", "tangerine", "grape", "lemon"];
      return fruits
        .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
        .map((str) => ({ value: str }));
    },
  },
};

// =====Story 2: 自定义模板（搜索歌曲+专辑） =====
export const CustomRenderSearch: GenericStory<{ album: string }> = {
  args: {
    placeholder: "搜索 Glass Animals 的歌曲",
    fetchSuggestions: (query: string) => {
      const songs = [
        { value: "Heat Waves", album: "Dreamland" },
        { value: "Gooey", album: "ZABA" },
        { value: "Youth", album: "How to Be a Human Being" },
        { value: "Your Love (Déjà Vu)", album: "Dreamland" },
        { value: "Life Itself", album: "How to Be a Human Being" },
        { value: "Hazey", album: "ZABA" },
      ];
      return songs.filter((item) =>
        item.value.toLowerCase().includes(query.toLowerCase())
      );
    },
    renderOption: (item) => (
      <div style={{ padding: "4px 0" }}>
        <strong>{item.value}</strong>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>
          专辑：{item.album}
        </p>
      </div>
    ),
  },
};

// ===== Story 3: 异步搜索 GitHub 用户 =====
interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

type GithubAutoCompleteProps = AutoCompleteProps<GithubUserProps>;

const meta: Meta<React.FC<GithubAutoCompleteProps>> = {
  title: "AutoComplete",
  component: AutoComplete,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
输入框自动完成功能。当输入值需要自动完成时使用，支持同步和异步两种方式 支持 Input 组件的所有属性 支持键盘事件选择

---

AutoComplete input field.
Use it when you need to suggest options based on user input.
Supports both synchronous and asynchronous suggestions.
Inherits all props from the Input component.
Supports keyboard selection.
## 引用方法 ｜ Usage

\`\`\`js
import { Autocomplete } from 'cream-ui'
\`\`\`


`,
      },
    },
  },
};

export default meta;

type GithubStory = StoryObj<React.FC<GithubAutoCompleteProps>>;

const handleFetch = (query: string): Promise<DataSourceType<GithubUserProps>[]> => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then((res) => res.json())
    .then(({ items }) => {
      return items.slice(0, 10).map((item: any) => ({
        value: item.login,
        login: item.login,
        url: item.html_url,
        avatar_url: item.avatar_url,
      }));
    });
};

const renderOption = (item: DataSourceType<GithubUserProps>) => {
  return (
    <div style={{ padding: "4px 0" }}>
      <strong>{item.value}</strong>
      <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>{item.url}</p>
    </div>
  );
};

export const GithubUserSearch: GithubStory = {
  args: {
    placeholder: "搜索 GitHub 用户",
    fetchSuggestions: handleFetch,
    renderOption,
  },
};