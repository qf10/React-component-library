import React from "react";

import Tabs from "./tabs";
import { fireEvent, render, screen } from "@testing-library/react";
import { ItemProps, TabsProps } from "./type";
const items: Array<ItemProps> = [
  {
    key: "0",
    label: `Tab 1`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: "1",
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
    disabled: true,
  },
  {
    key: "2",
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
];
const testPorps: TabsProps = {
  items,
  defaultIndex: "0",
  onTabClick: jest.fn(),
};
describe("test Tabs components", () => {
  it("should render correct Tabs default props and click event", () => {
    render(<Tabs {...testPorps}></Tabs>);

    const tabsElement = screen.getByTestId("test-tab");
    const activeElement = screen.getByText("Tab 1");
    const disabledElement = screen.getByText("Tab 2");
    const elements = screen.getByText("Tab 3");
    expect(activeElement).toBeInTheDocument();
    expect(tabsElement).toBeInTheDocument();

    expect(activeElement).toHaveClass("tabs-header-item is-active");
    expect(disabledElement).toHaveClass("tabs-header-item is-disabled");

    fireEvent.click(disabledElement);
    expect(testPorps.onTabClick).not.toHaveBeenCalled();

    fireEvent.click(elements);
    expect(testPorps.onTabClick).toHaveBeenCalled();
    expect(elements).toHaveClass("tabs-header-item is-active");
    expect(activeElement).toHaveClass("tabs-header-item");
  });
});
