import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AutoComplete, type AutoCompleteProps, type DataSourceType } from "./autoComplete";

interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

type GithubAutoCompleteProps = AutoCompleteProps<GithubUserProps>;

const meta: Meta<React.FC<GithubAutoCompleteProps>> = {
  title: "AutoComplete",
  component: AutoComplete,
};

export default meta;

type Story = StoryObj<React.FC<GithubAutoCompleteProps>>;

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

export const GithubUserSearch: Story = {
  args: {
    placeholder: "搜索 GitHub 用户",
    fetchSuggestions: handleFetch,
    renderOption,
  },
};