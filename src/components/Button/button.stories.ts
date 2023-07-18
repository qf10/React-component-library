import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";
import "../../style/index.scss";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

/**
 * 按钮用于开始一个即时操作。
 * # 何时使用
 * 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
 */
const meta = {
  title: "Component/Button 按钮",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    btnType: "primary",
  },
};
export const Danger: Story = {
  args: {
    btnType: "danger",
  },
};
