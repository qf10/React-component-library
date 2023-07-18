import React, { useRef, useState } from "react";
import { SelectProps, SelectItemProps } from "./type";
import Input from "../Input/input";
import Transition from "../Transition/transition";
import classNames from "classnames";
import useClickOutSide from "../../hook/useClickOutSide";
import Icon from "../Icon/icon";
export const Select: React.FC<SelectProps> = (props) => {
  const {
    items = [],
    defaultOpen,
    placeholder,
    multiple,
    onSelect,
    onCancelItem,
    onVisibleChange,
  } = props;
  const selectRef = useRef<HTMLDivElement>(null);

  const [selectValue, setSelectValue] = useState<SelectItemProps[]>([]);
  const [placeholderValue, setPlaceholder] = useState(placeholder);
  const [showSelect, setShowSelect] = useState(() => {
    return defaultOpen ? defaultOpen : false;
  });
  const [singleValue, setSingleValue] = useState(() => {
    if (multiple) {
      return "";
    } else {
      const selectItem = items.find((item) => item.selected);
      selectItem && setSelectValue([selectItem]);
      return selectItem?.value;
    }
  });

  // 点击下拉以外的区域 隐藏下拉
  useClickOutSide(selectRef, () => {
    setShowSelect(false);
    onVisibleChange && onVisibleChange();
  });

  // 过滤重复选中项
  const handleFilterItem = (item: SelectItemProps) => {
    selectValue.push(item);
    return Array.from(new Set(selectValue));
  };

  // 点击下拉选项
  const handleClickItem = (item: SelectItemProps) => {
    // 检查是否点击了已选中的选项
    const isClickActive = handleCheckItem(item);
    if (isClickActive) {
      return;
    }
    if (!item.disabled) {
      let callbackValue: any = null;
      if (checkRadioType()) {
        const uniqueArray = handleFilterItem(item);
        setSelectValue(uniqueArray);
        callbackValue = uniqueArray;
      } else {
        setSelectValue([item]);
        setShowSelect(false);
        callbackValue = item;
      }
      onSelect && onSelect(callbackValue);
      checkRadioType()
        ? setPlaceholder("")
        : setSingleValue(item.value as string);
    }
  };

  // 聚焦
  const handleFocus = () => {
    onVisibleChange && onVisibleChange();
    setShowSelect(true);
  };

  // 点击icon
  const handleClickIcon = () => {
    setShowSelect(!showSelect);
  };

  const handleChange = () => {};

  // 删除选中
  const handleCancel = (item: SelectItemProps) => {
    const remainArray = selectValue.filter(
      (items) => items.value !== item.value
    );
    setSelectValue(remainArray);
    onCancelItem && onCancelItem(item);
    remainArray.length === 0 && setPlaceholder(placeholder);
  };

  // 给选中的选项添加样式
  const handleCheckItem = (item: SelectItemProps) => {
    for (let i = 0; i < selectValue.length; i++) {
      if (item.value === selectValue[i].value) {
        return true;
      }
    }
  };

  // 检查是否为单选
  const checkRadioType = () => {
    return multiple;
  };

  const renderSelectData = () => {
    return items.map((item, index) => {
      const classes = classNames("select-item", {
        "is-disabled": item.disabled,
        "is-active": handleCheckItem(item),
      });
      return (
        <li
          className={classes}
          onClick={() => handleClickItem(item)}
          key={index}
        >
          {item.value}
        </li>
      );
    });
  };

  const renderNullData = () => {
    return <div className="select-null">暂无数据</div>;
  };

  // 渲染下拉数据
  const renderSelect = () => {
    return (
      <Transition in={showSelect} animation="zoom-in-top" timeout={300}>
        <ul className="select-ul">
          {items.length > 0 ? renderSelectData() : renderNullData()}
        </ul>
      </Transition>
    );
  };

  // 渲染选中数据
  const renderSelectValue = () => {
    return (
      <div className="select-item-value">
        {selectValue.map((items, index) => {
          return (
            <span key={index}>
              {items.value}
              <Icon
                onClick={() => handleCancel(items)}
                className="cancel-icon"
                icon="circle-xmark"
                theme="info"
              />
            </span>
          );
        })}
      </div>
    );
  };
  return (
    <div className="select-container" ref={selectRef}>
      {selectValue.length > 0 && checkRadioType() && renderSelectValue()}
      <Input
        value={singleValue}
        placeholder={placeholderValue}
        icon="chevron-down"
        onFocus={handleFocus}
        onClickIcon={handleClickIcon}
        onChange={handleChange}
      />
      {renderSelect()}
    </div>
  );
};

Select.defaultProps = {
  items: [],
  defaultOpen: false,
  placeholder: "请选择",
  multiple: false,
};

export default Select;
