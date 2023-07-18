import { Meta, StoryObj } from "@storybook/react";
import Input from "./input";
import "../../style/index.scss";

/**
 * 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 * # 何时使用
 * - 需要用户输入表单域内容时。
 * - 提供组合型输入框，带搜索的输入框，还可以进行大小选择。
 */
const meta = {
  title: "Component/Input 输入框",
  tags: ["autodocs"],
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    placeholder: "请输入",
  },
};

/**
 * 带有icon输入框
 */
export const IconInput: Story = {
  args: {
    placeholder: "请输入",
    icon: "search",
  },
};

/**
 * 带有前缀的输入框
 */
export const PrepandInput: Story = {
  args: {
    placeholder: "请输入",
    icon: "search",
    prepand: "https:",
  },
};

/**
 * 带有后缀的输入框
 */
export const AppendInput: Story = {
  args: {
    placeholder: "请输入",
    append: ".com:",
  },
};

/**
 * 禁用的输入框
 */
export const DisabledInput: Story = {
  args: {
    placeholder: "请输入",
    disabled: true,
  },
};
