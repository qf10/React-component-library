import React from "react";
type onTabClickCallBack = (key: string, e: React.MouseEvent) => void;
export interface ItemProps {
  key?: string;
  label?: string;
  children?: string;
  disabled?: boolean;
}

export interface ProviderValue {
  index?: string;
  items?: Array<ItemProps>;
  onTabClick?: onTabClickCallBack;
}
export interface TabItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  label?: string;
  onTabClick?: onTabClickCallBack;
}
export interface TabsProps {
  defaultIndex?: string;
  className?: string;
  items: Array<ItemProps>;
  onTabClick?: onTabClickCallBack;
}
