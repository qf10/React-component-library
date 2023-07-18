import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Menu from "./menu";
import MenuItem from "./menuItem";

import SubItem from "./subItem";
import { MenuProps } from "./type";

const testProps: MenuProps = {
  defaultIndex: "0",
  onSelect: jest.fn(),
  className: "klass",
};

const testVerProps: MenuProps = {
  defaultIndex: "0",
  mode: "vertical",
};

const testsubVerProps: MenuProps = {
  defaultIndex: "0",
  mode: "vertical",
  defauleOpenSubMenu: ["3"],
  onSelect: jest.fn(),
};

const generateComponents = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>qf</MenuItem>
      <SubItem title="subItem">
        <MenuItem>sub1</MenuItem>
        <MenuItem>sub2</MenuItem>
      </SubItem>
    </Menu>
  );
};

const cssStyle = () => {
  const cssFile: string = `
  .viking-submenu {
    display: none;
  }
  .viking-submenu.menu-opened {
    display: block;
  }
  `;
  const style = document.createElement("style");
  style.innerHTML = cssFile;

  return style;
};
describe("test menu component", () => {
  it("should render correct Menu and MenuItem based on default Props", () => {
    render(generateComponents(testProps));
    const menuElement: HTMLElement = screen.getByTestId("test-menu");
    const activeElement: HTMLElement = screen.getByText("active");
    const disabledElement: HTMLElement = screen.getByText("disabled");

    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("menu");
    // eslint-disable-next-line testing-library/no-node-access
    // expect(menuElement.getElementsByTagName("li").length).toEqual(3);
    // eslint-disable-next-line testing-library/no-node-access
    expect(menuElement.querySelectorAll(":scope > li").length).toEqual(4);
    expect(activeElement).toHaveClass("menu-item is-active");

    expect(disabledElement).toHaveClass("menu-item is-disabled");
  });

  it("click items should change active and call the right callback", () => {
    render(generateComponents(testProps));
    const thirdItem = screen.getByText("qf");
    const activeElement: HTMLElement = screen.getByText("active");
    const disabledElement: HTMLElement = screen.getByText("disabled");

    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass("is-active");
    expect(activeElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith("2");

    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
  });

  it("should render vertical mode when mode is set to vertical", () => {
    render(generateComponents(testVerProps));
    const verElement = screen.getByTestId("test-menu");
    expect(verElement).toHaveClass("menu-vertical");
  });

  // it("should show dropdown items when hover on subMenu", async () => {
  //   render(generateComponents(testProps));
  //   const subElement = screen.getByText("subItem");
  //   subElement.append(cssStyle());

  //   // 事件 鼠标进入
  //   fireEvent.mouseEnter(subElement);

  //   await waitFor(() => {
  //     expect(subElement).toBeVisible();
  //   });
  //   const sub1Element = screen.getByText("sub1");
  //   fireEvent.click(sub1Element);
  //   expect(testProps.onSelect).toHaveBeenCalledWith("3-0");

  //   // 鼠标移出
  //   fireEvent.mouseLeave(subElement);
  //   await waitFor(() => {
  //     expect(subElement).not.toBeVisible();
  //   });
  // });

  it("should show dropdown items when  mode is set to vertical", () => {
    render(generateComponents(testsubVerProps));
    const subVerticalElement = screen.getByTestId("test-subitem");
    const subitem = screen.getByText("subItem");
    expect(subVerticalElement).toBeInTheDocument();
    expect(subVerticalElement).toHaveClass("viking-submenu menu-opened");
    fireEvent.click(subitem);
    expect(subVerticalElement).not.toHaveClass("viking-submenu menu-opened");
  });
});
