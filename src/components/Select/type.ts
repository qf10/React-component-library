export interface SelectItemProps {
  className?: string;
  disabled?: boolean;
  value?: string;
  selected?: true;
}
export interface SelectProps {
  /** 下拉选项数据 */
  items?: SelectItemProps[];
  /** 占位符 */
  placeholder?: string;
  /** 是否打开下拉选项 */
  defaultOpen?: boolean;
  /** 是否为多选 */
  multiple?: boolean;
  /** 选中选项的回调 */
  onSelect?: (item: SelectItemProps) => void;
  /** 删除选中选项的回调 只在多选中生效 */
  onCancelItem?: (item: SelectItemProps) => void;
  /** 下拉框显示与隐藏时回调 */
  onVisibleChange?: () => void;
}
