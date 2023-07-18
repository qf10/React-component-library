import { Meta, StoryObj } from "@storybook/react";
import Select from "./select";
import { SelectProps, SelectItemProps } from "./type";
import "../../style/index.scss";
/**
 * 下拉选择器。
 * # 何时使用
 * - 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
 * - 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。
 */
const meta = {
  title: "Component/Select 选择器",
  tags: ["autodocs"],
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const selectItems: SelectItemProps[] = [
  {
    value: "1",
    disabled: true,
  },
  {
    value: "2",
  },
  {
    value: "3",
  },
];

/** 单选下拉框 */
export const DefaultSelect: Story = {
  args: {},
  render: ({ items = selectItems, ...restProps }: SelectProps) => (
    <Select items={items} {...restProps} />
  ),
};

/** 多选下拉框 */
export const MultipleSelect: Story = {
  args: {},
  render: ({
    items = selectItems,
    multiple = true,
    ...restProps
  }: SelectProps) => (
    <Select items={items} multiple={multiple} {...restProps} />
  ),
};
