import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ChangeEvent, InputHTMLAttributes } from "react";
type InputSize = "small" | "middle" | "large";
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  /**占位文案 */
  placeholder?: string;
  /**是否禁用 */
  disabled?: boolean;
  /**输入框尺寸大小 */
  size?: InputSize;
  /**输入框icon图标 */
  icon?: IconProp;
  /**输入框后缀 */
  prepand?: string;
  /**输入框前缀 */
  append?: string;
  className?: string;
  /**输入时触发 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickIcon?: () => void;
}
