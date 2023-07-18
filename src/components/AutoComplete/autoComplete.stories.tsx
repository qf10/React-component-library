import { Meta, StoryObj } from "@storybook/react";
import AutoComplete from "./autoComplete";
import "../../style/index.scss";
import { AutoCompleteProps } from "./type";
const meta = {
  tags: ["autodocs"],
  title: "Component/AutoComplete 搜索功能输入框",
  component: AutoComplete,
} satisfies Meta<typeof AutoComplete>;

export default meta;

type Story = StoryObj<typeof meta>;
const data = ["a", "abc", "s", "1s", "5"];
const handleFetch = (key: string) => {
  return fetch(`https://api.github.com/search/users?q=${key}`)
    .then((res) => res.json())
    .then(({ items }) => {
      console.info(items);
      return items.slice(0, 10).map((v: any) => ({ value: v.login, ...v }));
    });
};

const syncHandle = (key: string) => {
  return data
    .filter((item) => item.includes(key))
    .map((v) => ({
      value: v,
    }));
};

const handleSelect = (item: any) => {
  console.info(item);
};

/**
 * 获取同步数据
 */
export const DefaultSyncInput = {
  args: {
    fetchSuggestions: syncHandle,
    onSelect: handleSelect,
    placeholder: "请输入",
  },
  render: () => (
    <AutoComplete fetchSuggestions={syncHandle} onSelect={handleSelect} />
  ),
} satisfies Story;

/**
 * 获取异步数据
 */
export const AsyncInput = {
  args: {
    fetchSuggestions: handleFetch,
    onSelect: handleSelect,
    placeholder: "请输入",
  },
  render: ({
    fetchSuggestions,
    onSelect,
    placeholder,
    ...restProps
  }: AutoCompleteProps) => (
    <AutoComplete
      placeholder={placeholder}
      fetchSuggestions={handleFetch}
      onSelect={handleSelect}
      {...restProps}
    />
  ),
} satisfies Story;
