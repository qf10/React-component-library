import React, { useContext, FunctionComponentElement, useState } from "react";
import { SubItemProps } from "./type";
import classNames from "classnames";
import { MenuContext } from "./menu";
import Transition from "../Transition/transition";
import Icon from "../Icon/icon";

const SubItem: React.FC<SubItemProps> = (props) => {
  const context = useContext(MenuContext);
  const { index, title, className, children } = props;
  const openSubMenu = context.defauleOpenSubMenu as Array<string>;
  const isOpen =
    index && context.mode === "vertical" ? openSubMenu.includes(index) : false;
  let timer: any;
  const [openMenu, setOpen] = useState(isOpen);
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
    "is-opened": openMenu,
    "is-vertical": context.mode === "vertical",
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!openMenu);
  };

  const handleMouse = (e: React.MouseEvent, toggol: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggol);
    }, 300);
  };

  // 事件 分为横向和纵向
  const horizontalClick =
    context.mode === "vertical"
      ? {
          onClick: handleClick,
        }
      : {};
  const verticalMove =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};
  const renderChildren = () => {
    const subMenuClasses = classNames("viking-submenu", className, {
      "menu-opened": openMenu,
    });
    const renderElement = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<SubItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.error("Warning: SubItem has a child which is not a MenuItem");
      }
    });

    return (
      <Transition in={openMenu} timeout={300} animation="zoom-in-top">
        <ul data-testid="test-subitem" className={subMenuClasses}>
          {renderElement}
        </ul>
      </Transition>
    );
  };
  return (
    <li key={index} className={classes} {...verticalMove}>
      <div className="submenu-title" {...horizontalClick}>
        {title}
        <Icon icon="angle-down" className="arrow-icon"></Icon>
      </div>
      {renderChildren()}
    </li>
  );
};

SubItem.displayName = "SubMenu";

export default SubItem;
