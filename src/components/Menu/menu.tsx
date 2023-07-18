import React, {
  useState,
  createContext,
  FunctionComponentElement,
} from "react";
import { MenuProps, IMenuContext, MenuItemProps } from "./type";
import classNames from "classnames";
export const MenuContext = createContext<IMenuContext>({
  index: "0",
});
export const Menu: React.FC<MenuProps> = ({
  className,
  mode,
  defaultIndex,
  children,
  style,
  defauleOpenSubMenu,
  onSelect,
}: MenuProps) => {
  const classes = classNames("menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });

  const [currenIndex, setIndex] = useState(defaultIndex);
  const handleClick = (index: string) => {
    setIndex(index);
    onSelect && onSelect(index);
  };

  const providerValue: IMenuContext = {
    index: currenIndex ? currenIndex : "0",
    onSelect: handleClick,
    mode,
    defauleOpenSubMenu,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;

      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.error("Warning: menu has a child which is not a MenuItem");
      }
    });
  };
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={providerValue}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  defauleOpenSubMenu: [],
};

export default Menu;
