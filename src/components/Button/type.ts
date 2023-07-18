import React from "react";
type ButtonSize = "small" | "middle" | "large";
export type ButtonType =
  | "primary"
  | "default"
  | "danger"
  | "link"
  | "warn"
  | "success";

export enum EnumButtonType {
  PRIMARY = "primary",
  DEFAULT = "default",
  DANGER = "danger",
  WARN = "warn",
  LIKN = "link",
}

export interface BaseButtonProps {
  className?: string;
  /** 按钮是否禁用  */
  disabled?: boolean;

  /**按钮大小 */
  size?: ButtonSize;

  /** 按钮类型 */
  btnType?: ButtonType;

  text?: string;

  /** 当类型为link的时候 必须填该属性 */
  href?: string;
  children?: React.ReactNode;

  /** 按钮点击回调function(e:event){} */
  onClick?: () => void;
}

type NactiveButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NactiveButtonProps & AnchorButtonProps>;
