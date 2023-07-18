import React from "react";
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubItem from "./subItem";
import { MenuProps, MenuItemProps, SubItemProps } from "./type";

export type IMenuComponent = React.FC<MenuProps> & {
  Item: React.FC<MenuItemProps>;
  SubItem: React.FC<SubItemProps>;
};

const TranMenu = Menu as IMenuComponent;

TranMenu.Item = MenuItem;
TranMenu.SubItem = SubItem;

export default TranMenu;
