import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { AutoCompleteProps, DataSourceType, KeyBoardType } from "./type";
import Input from "../Input/input";
import Icon from "../Icon/icon";
import useDebounce from "../../hook/useDebounce";
import useClickOutSide from "../../hook/useClickOutSide";
import classNames from "classnames";
import Transition from "../Transition/transition";
export const AutoComplete: React.FC<AutoCompleteProps> = (
  props: AutoCompleteProps
) => {
  const { fetchSuggestions, onSelect, concustomRender, value, ...restProps } =
    props;
  const [defaultValue, setValue] = useState(value as string);
  const [suggesttion, setSuggestion] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);
  const compRef = useRef<HTMLDivElement>(null);
  const stopSearch = useRef(false);
  const debounceValue = useDebounce(defaultValue, 500);
  // 点击不在下拉区域 移除选项
  useClickOutSide(compRef, () => {
    setShowDropdown(false);
  });

  useEffect(() => {
    if (debounceValue && stopSearch.current) {
      const result = fetchSuggestions(debounceValue);
      setLoading(true);
      // 处理异步操作
      if (result instanceof Promise) {
        result.then((data) => {
          setLoading(false);
          setSuggestion(data);
          data.length > 0 && setShowDropdown(true);
        });
      } else {
        setSuggestion(result);
        setShowDropdown(true);
        setLoading(false);
        result.length > 0 && setShowDropdown(true);
      }
    } else {
      setShowDropdown(false);
    }
  }, [debounceValue, fetchSuggestions]);

  // 输入框改变
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    console.info(inputValue);
    stopSearch.current = true;
    setValue(inputValue);
  };

  // 选择选项
  const handleSelect = (item: DataSourceType) => {
    setValue(item.value);
    setShowDropdown(false);
    onSelect && onSelect(item);
    stopSearch.current = false;
  };

  // 选项高亮
  const highlight = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggesttion.length) index = suggesttion.length - 1;
    setIndex(index);
  };

  // 键盘事件
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.code) {
      case KeyBoardType.ENTER:
        suggesttion[activeIndex] && handleSelect(suggesttion[activeIndex]);
        break;
      case KeyBoardType.ARROWUP:
        highlight(activeIndex - 1);
        break;
      case KeyBoardType.ARROWDOWN:
        highlight(activeIndex + 1);
        break;
      case KeyBoardType.ESC:
        setShowDropdown(false);
        break;
      default:
        break;
    }
  };

  // 自定义渲染模板
  const renderTemplate = (item: DataSourceType) => {
    return concustomRender ? concustomRender(item) : item.value;
  };

  // 展示查询数据
  const renderDropDown = () => {
    return (
      <Transition
        in={showDropdown || loading}
        animation="zoom-in-top"
        timeout={300}
        onExited={() => {
          setSuggestion([]);
        }}
      >
        <ul className="viking-suggestion-list">
          {loading && (
            <div className="suggstions-loading-icon">
              <Icon icon="spinner" spin></Icon>
            </div>
          )}
          {suggesttion.map((item, index) => {
            const classes = classNames("suggestion-item", {
              "item-highlight": index === activeIndex,
            });
            return (
              <li
                className={classes}
                key={index}
                onClick={() => handleSelect(item)}
              >
                {renderTemplate(item)}
              </li>
            );
          })}
        </ul>
      </Transition>
    );
  };

  return (
    <div className="viking-auto-complete" ref={compRef}>
      <Input
        value={defaultValue}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        {...restProps}
      />

      {renderDropDown()}
    </div>
  );
};

export default AutoComplete;
