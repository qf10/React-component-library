import { Meta, StoryObj } from "@storybook/react";
import Tabs from "./tabs";
import "../../style/index.scss";
/**
 * 选项卡切换组件。
 * # 何时使用
 * - 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
 */
const meta = {
  title: "Component/Tabs 标签页",
  tags: ["autodocs"],
  argTypes: {
    onTabClick: {
      control: false,
    },
  },
  component: Tabs,
} satisfies Meta<typeof Tabs>;
const items = [
  {
    key: "0",
    label: `Tab 1`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: "1",
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: "2",
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
];
export default meta;
type Story = StoryObj<typeof meta>;
export const DefaultTabs: Story = {
  args: {
    defaultIndex: "0",
    items,
  },
};
