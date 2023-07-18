import { Meta, StoryObj } from "@storybook/react";
import Icon from "./icon";
const meta = {
  title: "Component/Icon 图标",
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof meta>;
export default meta;

export const DefaultsIcon = {
  args: {
    icon: "coffee",
    theme: "info",
  },
};
