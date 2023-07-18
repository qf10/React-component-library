import { Meta, StoryObj } from "@storybook/react";
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubItem from "./subItem";
import { MenuProps, MenuItemProps } from "./type";
import "../../style/index.scss";
/**
 * 为页面和功能提供导航的菜单列表。
 * # 何时使用
 * - 导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。
 */
const meta = {
  title: "Component/Meun 导航菜单",
  component: Menu,
  tags: ["autodocs"],
  argTypes: {
    onSelect: {
      control: false,
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

/**
 * 默认横向排列（没有子菜单）
 */
export const Defaultmenu = {
  render: ({ defaultIndex = "0", ...restProps }: MenuProps) => (
    <Menu defaultIndex={defaultIndex} {...restProps}>
      <MenuItem>menu1</MenuItem>
      <MenuItem>menu2</MenuItem>
      <MenuItem>menu3</MenuItem>
    </Menu>
  ),
};

/**
 * 纵向排列
 */
export const DefaultmenuVertical = {
  args: {
    defaultIndex: "0",
    mode: "vertical",
  },
  render: ({
    defaultIndex = "0",
    mode = "vertical",
    ...restProps
  }: MenuProps) => (
    <Menu defaultIndex={defaultIndex} mode={mode} {...restProps}>
      <MenuItem>menu1</MenuItem>
      <MenuItem>menu2</MenuItem>
      <MenuItem>menu3</MenuItem>
    </Menu>
  ),
} satisfies Story;

/**
 * 纵向排列（有子菜单）
 */
export const SubmenuVertical = {
  args: {
    defaultIndex: "0",
  },
  render: ({
    defaultIndex = "0",
    mode = "vertical",
    disabled,
    ...restProps
  }: MenuProps & MenuItemProps) => (
    <Menu defaultIndex={defaultIndex} mode={mode} {...restProps}>
      <MenuItem>menu1</MenuItem>
      <SubItem title="subItem">
        <MenuItem>sub1</MenuItem>
        <MenuItem>sub2</MenuItem>
      </SubItem>
      <MenuItem>menu3</MenuItem>
    </Menu>
  ),
} satisfies Story;

/**
 * 横向排列（有子菜单）且禁用菜单
 */
export const SubmenuHorizontal = {
  args: {
    defaultIndex: "0",
  },
  render: ({
    defaultIndex = "0",
    mode = "horizontal",
    disabled,
    ...restProps
  }: MenuProps & MenuItemProps) => (
    <Menu defaultIndex={defaultIndex} mode={mode} {...restProps}>
      <MenuItem>menu1</MenuItem>
      <SubItem title="subItem">
        <MenuItem>sub1</MenuItem>
        <MenuItem>sub2</MenuItem>
      </SubItem>
      <MenuItem disabled>menu3</MenuItem>
    </Menu>
  ),
} satisfies Story;
