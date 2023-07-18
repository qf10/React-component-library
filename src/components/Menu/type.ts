import React, { ReactNode } from "react";

type ModeType = "horizontal" | "vertical";
type SelectCallBack = (index: string) => void;

export interface IMenuContext {
  index: string;
  onSelect?: SelectCallBack;
  mode?: ModeType;
  defauleOpenSubMenu?: string[];
}
export interface MenuProps {
  className?: string;
  /** 默认选中菜单 */
  defaultIndex: string;

  /** 菜单排序类型 */
  mode?: ModeType;
  style?: React.CSSProperties;
  children?: ReactNode;

  /** 存在子菜单时，是否展开选中子菜单 */
  defauleOpenSubMenu?: string[];

  /** 点击菜单栏回调 function(key){}*/
  onSelect?: SelectCallBack;
}
export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}
export interface SubItemProps {
  index?: string;
  title?: string;
  className?: string;
  children?: ReactNode;
}
