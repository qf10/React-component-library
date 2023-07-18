import { Meta, StoryObj } from "@storybook/react";
import "../../style/index.scss";
import Alert from "./alert";
/**
 * 警告提示，展现需要关注的信息。
 * # 何时使用
 * - 当某个页面需要向用户显示警告的信息时。
 * - 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。
 */
const meta = {
  title: "Component/Alert 提示框",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultAlert: Story = {
  args: {},
};
/**
 * 成功提示
 */
export const SuccessAlert: Story = {
  args: {
    type: "success",
    message: "成功提示",
  },
};
/**
 * 警告提示
 */
export const WarnAlert: Story = {
  args: {
    type: "warn",
    message: "警告提示",
  },
};
/**
 * 错误提示
 */
export const ErrorAlert: Story = {
  args: {
    type: "error",
    message: "错误提示",
  },
};

/**
 * 展示关闭按钮提示
 */
export const ShowColseAlert: Story = {
  args: {
    type: "error",
    showClose: true,
  },
};
