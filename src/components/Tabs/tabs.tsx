import React, { useState, createContext } from "react";
import { ProviderValue, TabsProps } from "./type";
import TabItems from "./tabItem";
import classNames from "classnames";
export const TabContext = createContext<ProviderValue>({
  index: "0",
});
export const Tabs: React.FC<TabsProps> = ({
  items,
  className,
  defaultIndex,
  onTabClick,
}: TabsProps) => {
  const [currenIndex, setIndex] = useState(defaultIndex);
  const classes = classNames("qf-tab-header", className, {});

  // 渲染内容区域
  const renderContainer = () => {
    const filterItems = items.filter((item) => item.key === currenIndex);
    return filterItems.map((item) => <div key={item.key}>{item.children}</div>);
  };

  // 事件
  const handleClick = (key: string, e: React.MouseEvent) => {
    setIndex(key);
    onTabClick && onTabClick(key, e);
  };
  // 传递数据
  const providerValue: ProviderValue = {
    index: currenIndex ? currenIndex : "0",
    onTabClick: handleClick,
  };
  return (
    <div data-testid="test-tab">
      <TabContext.Provider value={providerValue}>
        <ul className={classes}>
          {items.map((item) => (
            <TabItems index={item.key} {...item}></TabItems>
          ))}
        </ul>
      </TabContext.Provider>
      {renderContainer()}
    </div>
  );
};
Tabs.defaultProps = {
  defaultIndex: "0",
};

export default Tabs;
